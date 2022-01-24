<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
      </div>
    </div>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Nueva entrada de auto</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="trending_up" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'green_dark' : 'bg-green-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Datos de la verificación</div>
                <div class="text-h5">Status: Por validar</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="far fa-dot-circle" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div>
      <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">
                Registro de Auto
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <q-separator inset></q-separator>
              <q-form>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Marca</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.marca"
                        label="Marca"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Modelo</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.modelo"
                        label="Modelo"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Año</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.anio"
                        label="Año"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Placas</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.placas"
                        label="Placas"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
                <center>
                  <q-btn
                    color="primary"
                    icon-right="archive"
                    label="Verificar Multas"
                    no-caps
                    @click="validarAutoMulta"
                  />
                </center>
              </q-form>
            </q-card-section>
          </q-card>
          <br />
        </div>

        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" v-if="insertAllData">
          <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">
                Proceso de verificación
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('line')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator inset></q-separator>
            <q-card-section>
              <q-form>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Nombre del Técnico</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.tecnicoid"
                        label="Nombre y ID"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Odómetro ID</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.odometroid"
                        label="ID"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Monóxido de Carbono</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.co"
                        label="CO Registrado"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Dióxido de Carbono</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.co2"
                        label="CO2 Registrado"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Oxígeno</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.o2"
                        label="O2 Registrado"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Oxígeno de Nitrógeno</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.noxppm"
                        label="NOX ppm"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Hidrocarburos</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.hidrocarburo"
                        label="HC x pmm"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Lambda</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.lambda"
                        label="Lambda"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Tapa Gasolina</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.tapagasolina"
                        label="Tapa Gasolina"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Bayoneta de Aceite</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.bayonetaaceite"
                        label="Bayoneta de Aceite"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Filtro de Aire</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.filtroaire"
                        label="Filtro de Aire"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Tubo de Escape</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.tuboescape"
                        label="Tubo de Escape"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Llantas</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.ruedas"
                        label="Llantas"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Tapon de Radiador</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.taponradiador"
                        label="Tapon de Radiador"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Manguera de Vacio</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.mangueravacio"
                        label="Manguera de Vacio"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Luces Traceras y Delanteras</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        v-model="deposit.lucestyd"
                        label="Luces Traceras y Delanteras"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
                <center>
                  <q-btn
                    color="primary"
                    icon-right="archive"
                    label="Registrar Auto"
                    no-caps
                    @click="addCar"
                  />
                </center>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import IEcharts from "vue-echarts-v3/src/full.js";
import axios from "axios";
import store from "./store";
import lockr from "lockr";
Vue.component("IEcharts", IEcharts);

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}

export default {
  data() {
    return {
      arrayId: [],
      maxId: -1,
      autoId: 0,
      deposit: {},
      insertAllData: false,
      options: [
        "National Bank",
        "Bank of Asia",
        "Corporate Bank",
        "Public Bank",
      ],
      filter: "",
      mode: "list",

      gaugeOptions: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            type: "gauge",
            name: "Sale",
            detail: { formatter: "{value}%" },
            data: [{ value: 30 }],
            min: 0,
            radius: "100%",
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0.35, "#293c55"],
                  [0.65, "#61a0a8"],
                  [1, "#c23731"],
                ],
                width: 20,
              },
            },
          },
        ],
      },
      columns: [
        {
          name: "activity_id",
          align: "left",
          label: "Activity ID",
          field: "activity_id",
          sortable: true,
        },
        {
          name: "desc",
          required: true,
          label: "Activity Name",
          align: "left",
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: "regarding",
          align: "left",
          label: "Regarding",
          field: "regarding",
          sortable: true,
        },
        {
          name: "owner",
          align: "left",
          label: "Owner",
          field: "owner",
          sortable: true,
        },
        {
          name: "creation_date",
          align: "left",
          label: "Creation Date",
          field: "creation_date",
          sortable: true,
        },
      ],
      data: [
        {
          activity_id: "C001",
          name: "Advanced communications",
          regarding: "Presentation",
          owner: "John",
          creation_date: "12-09-2019",
        },
        {
          activity_id: "C002",
          name: "New drug discussion",
          regarding: "Meeting",
          owner: "John",
          creation_date: "09-02-2019",
        },
        {
          activity_id: "C003",
          name: "Universal services discussion",
          regarding: "Meeting",
          owner: "John",
          creation_date: "03-25-2019",
        },
        {
          activity_id: "C004",
          name: "Add on business",
          regarding: "Business",
          owner: "John",
          creation_date: "03-18-2019",
        },
        {
          activity_id: "C005",
          name: "Promotional Activity",
          regarding: "Personal",
          owner: "John",
          creation_date: "04-09-2019",
        },
      ],
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  computed: {
    userId(){
      return lockr.get("userId")
    },
    currentToken(){
      return lockr.get("currentToken")
    },
    barOptions() {
      return {
        grid: {
          bottom: "20%",
          left: "15%",
          top: "3%",
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ["time_period", "sale", "goal"],
          source: [
            { time_period: "Jan 2019", sale: 50, goal: 70 },
            { time_period: "Feb 2019", sale: 80, goal: 75 },
            { time_period: "Mar 2019", sale: 86, goal: 80 },
            { time_period: "Apr 2019", sale: 72, goal: 85 },
          ],
        },
        xAxis: {
          type: "category",
          // axisLabel: {
          //     rotate: 45
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        yAxis: {
          // name: 'Goal',
          // nameLocation: 'center',
          // nameGap: 30,
          // nameTextStyle:{
          //     fontWeight: 'bold'
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        series: [
          { type: "bar", name: "Sales" },
          { type: "bar", name: "Goals" },
        ],
      };
    },
    lineChartOption() {
      return {
        grid: {
          bottom: "20%",
          left: "15%",
          top: "3%",
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        tooltip: {
          // formatter:
          //     function (param) {
          //     console.log(param)
          //     // return param.seriesName + '<br />' + param.name + ': ';
          // }
        },
        dataset: {
          dimensions: ["product_name", "share", "growth"],
          source: [
            { product_name: "Product A", share: 20, growth: 25 },
            { product_name: "Product B", share: 22, growth: 18 },
            { product_name: "Product C", share: 40, growth: 45 },
          ],
        },
        xAxis: {
          type: "category",
          // axisLabel: {
          //     rotate: 45
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        yAxis: {
          axisLabel: {
            formatter: function (value, index) {
              return value + " %";
            },
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        series: [
          { type: "line", name: "Share" },
          { type: "line", name: "Growth" },
        ],
      };
    },
    pieOptions() {
      return {
        tooltip: {
          show: true,
        },
        legend: {
          orient: "horizontal",
          bottom: 0,
          width: 300,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        series: [
          {
            name: "Competitor",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inner",
                formatter: function (param, index) {
                  return param.value + " %";
                },
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            selectedMode: "single",
            data: [
              { value: 40, name: "Product 1", selected: true },
              { value: 20, name: "Competitor 1", selected: false },
              { value: 15, name: "Competitor 2", selected: false },
              { value: 25, name: "Competitor 3", selected: false },
            ],
          },
        ],
      };
    },
    stackedBarOptions() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "rgba(50,50,50,0.9)",
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        color: ["#3395dd", "#ed892d", "#34393b"],
        // legend: {
        //     y: "bottom",
        //     data: [{name: 'Territory Sales', icon: 'circle'}, {
        //         name: 'Remaining Nation Sales',
        //         icon: 'circle'
        //     }]
        // },
        grid: {
          bottom: "10%",
          left: "15%",
          top: "9%",
        },
        calculable: true,
        xAxis: {
          type: "value",
          position: "top",
          axisLine: {
            show: false,
          },
          axisLabel: {
            formatter: function (value, index) {
              return "$" + value;
            },
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        yAxis: [
          {
            type: "category",
            data: [
              "Alex Morrow",
              "Joanna Carter",
              "Jimmy Joanna",
              "Mack Hales",
            ],
            axisLabel: {
              fontSize: 12,
              color: this.$q.dark.isActive ? "white" : "#676767",
            },
          },
        ],
        series: [
          {
            name: "Qualification",
            type: "bar",
            stack: "A",
            data: [300, 350, 400, 500],
          },
          {
            name: "Discovery",
            type: "bar",
            stack: "A",
            data: [100, 180, 250, 300],
          },
          {
            name: "Quote",
            type: "bar",
            stack: "A",
            data: [100, 120, 200, 220],
          },
        ],
      };
    },
  },
  methods: {
    SaveImage(type) {
      const linkSource = this.$refs[type].getDataURL();
      const downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = "_self";
      downloadLink.download = type + ".png";
      downloadLink.click();
    },
    async addCar() {
      let vm = this;
      //Obteniendo el id mayor
      await vm.ConectDB();
      let max = parseInt(vm.maxId) + 1;
      console.log("Valor max actual de la PK en BD==>", max);
      debugger
      let token = vm.currentToken;
      vm.deposit.verificentroid = vm.userId
      vm.deposit.validadorid = "V"+Math.round(Math.random()*10)
      vm.deposit.status = "Por validar";
      vm.deposit.id = max;
      vm.deposit.createdate = vm.currentDate();
      vm.deposit.updatedate = "--";
      vm.deposit.ccvvalid = vm.asignarCVVValidador(
        vm.deposit.verificentroid.substring(4, vm.deposit.verificentroid.length)
      );
      vm.deposit.lineaverifica = parseInt(Math.random() * (4 - 1) + 1);
      console.log("Agregando el registro al ledger" + vm.deposit.id);
      vm.insertLedger(token);
    },
    async insertLedger(token) {
      let vm = this;
      let arg = [
        '{"id":"' +
          vm.deposit.id +
          '","marca":"' +
          vm.deposit.marca +
          '","modelo":"' +
          vm.deposit.modelo +
          '","placas":"' +
          vm.deposit.placas +
          '","anio":"' +
          vm.deposit.anio +
          '","verificentroid":"' +
          vm.deposit.verificentroid +
          '","tecnicoid":"' +
          vm.deposit.tecnicoid +
          '","odometroid":"' +
          vm.deposit.odometroid +
          '","validadorid":"' +
          vm.deposit.validadorid +
          '","lineaverifica":"' +
          vm.deposit.lineaverifica +
          '","status":"' +
          vm.deposit.status +
          '","co":"' +
          vm.deposit.co +
          '","co2":"' +
          vm.deposit.co2 +
          '","o2":"' +
          vm.deposit.o2 +
          '","noxppm":"' +
          vm.deposit.noxppm +
          '","hidrocarburo":"' +
          vm.deposit.hidrocarburo +
          '","lambda":"' +
          vm.deposit.lambda +
          '","ccvvalid":"' +
          vm.deposit.ccvvalid +
          '","validadorid":"' +
          vm.deposit.validadorid +
          '","tapagasolina":"' +
          vm.deposit.tapagasolina +
          '","bayonetaaceite":"' +
          vm.deposit.bayonetaaceite +
          '","filtroaire":"' +
          vm.deposit.filtroaire +
          '","tuboescape":"' +
          vm.deposit.tuboescape +
          '","taponradiador":"' +
          vm.deposit.taponradiador +
          '","mangueravacio":"' +
          vm.deposit.mangueravacio +
          '","ruedas":"' +
          vm.deposit.ruedas +
          '","lucestyd":"' +
          vm.deposit.lucestyd +
          '","createdate":"' +
          vm.deposit.createdate +
          '","updatedate":"' +
          vm.deposit.updatedate +
          '"}',
      ];
      console.log(vm.deposit);
      let body = {
        fcn: "CreateCar",
        chaincodeName: "fabcar",
        channelName: "mychannel",
        args: arg,
      };
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("Deposit " + vm.deposit);
      debugger
      await axios
        .post(
          "http://localhost:4000/channels/mychannel/chaincodes/fabcar",
          body,
          config
        )
      vm.deposit = {};
      console.log("Auto agregado al Ledger");
      this.$q.notify({
            message: "Datos ingresados con éxito, favor de esperar autenticación",
          });
      vm.insertAllData = false;
    },
    async validarAutoMulta() {
      let vm = this;
      //Obteniendo el id mayor de todos los registros
      await vm.ConectDB();
      let max = parseInt(vm.maxId) + 1;
      console.log("Soy el valor max de la PK", max);
      //Verificando que se metan todos los valores
      if (
        vm.deposit.marca &&
        vm.deposit.modelo &&
        vm.deposit.placas &&
        vm.deposit.anio
      ) {
        //Aleatoriedad para los que si tienen multas
        if (Math.round(Math.random() * (10 - 0)) + 0 == 5) {
          console.log("El auto cuenta con multas por pagar");
          this.$q.notify({
            message: "Favor de pagar multas antes de verificar",
          });
          let token = vm.currentToken;
          vm.deposit.id = max;
          vm.deposit.verificentroid = vm.userId; 
          vm.deposit.tecnicoid = "--";
          vm.deposit.odometroid = "--";
          vm.deposit.validadorid = "--";
          vm.deposit.lineaverifica = "--";
          vm.deposit.status = "Rechazado por multas";
          vm.deposit.co = "--";
          vm.deposit.co2 = "--";
          vm.deposit.o2 = "--";
          vm.deposit.noxppm = "--";
          vm.deposit.hidrocarburo = "--";
          vm.deposit.lambda = "--";
          vm.deposit.ccvvalid = "--";
          vm.deposit.validadorid = "--";
          vm.deposit.tapagasolina = "--";
          vm.deposit.bayonetaaceite = "--";
          vm.deposit.filtroaire = "--";
          vm.deposit.tuboescape = "--";
          vm.deposit.taponradiador = "--";
          vm.deposit.mangueravacio = "--";
          vm.deposit.ruedas = "--";
          vm.deposit.lucestyd = "--";
          vm.deposit.createdate = vm.currentDate();
          vm.deposit.updatedate = "--";
          debugger
          vm.insertLedger(token);
        } else {
          console.log("El auto No tiene multas, adelante");
          vm.insertAllData = true;
          this.$q.notify({
            message: "Sin multas, adelante ",
          });
        }
      } else {
        this.$q.notify({
          message: "Favor de llenar todos los campos",
        });
      }
    },
    currentDate() {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (month < 10) {
        var data =
          day +
          "-0" +
          month +
          "-" +
          year +
          " " +
          hour +
          ":" +
          minutes +
          ":" +
          seconds;
        return data;
      } else {
        var data =
          day +
          "-" +
          month +
          "-" +
          year +
          " " +
          hour +
          ":" +
          minutes +
          ":" +
          seconds;
        return data;
      }
    },
    asignarCVVValidador(currentCVV) {
      console.log("CVV Origen: " + currentCVV);
      let vm = this;
      var randomNumber = parseInt(Math.random() * (11 - 1) + 1);
      if (randomNumber == currentCVV) {
        vm.asignarCVVValidador(currentCVV);
      } else {
        var Org = "CVV_" + randomNumber;
        return Org;
      }
    },
    //Busqueda en todo el ledger
    async ConectDB() {
      let vm = this;
      var username = "admin";
      var password = "adminpw";
      let body = {
        selector: {},
      };
      let config = {
        auth: {
          username: username,
          password: password,
        },
      };
      console.log("Deposit " + vm.deposit);
      const response = await axios.post(
        "http://localhost:5984/mychannel_fabcar/_find",
        body,
        config
      );
      for (let i = 0; i < response.data.docs.length; i++) {
        vm.arrayId.push(response.data.docs[i]._id);
      }
      console.log("Soy el array de id", vm.arrayId);
      for (let i = 0; i < vm.arrayId.length; i++) {
        if (parseInt(vm.arrayId[i]) > vm.maxId) vm.maxId = vm.arrayId[i];
      }
    },
  },
};
</script>

<style scoped>
.blue_dark {
  background-color: #082f56;
}

.green_dark {
  background-color: #084a0b;
}

.orange_dark {
  background-color: #64350e;
}
</style>
