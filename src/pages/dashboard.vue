<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12"></div>
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
                <div class="text-h5">Nueva entrada de auto</div>
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
                <div class="text-h5">Datos de la verificación</div>
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
                  class="float-right"
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
                      <q-item-label class="q-pb-xs">Marca</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.marca"
                        label="Marca"
                        :disable="insertAllData"
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
                        :disable="insertAllData"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">NIV</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="deposit.niv"
                        label="Número de Identificación Vehicular"
                        :disable="insertAllData"
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
                        :disable="insertAllData"
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
                    :disable="insertAllData"
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
              <q-form v-show="showAsignations">
                <q-separator inset></q-separator>
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section
                      >Centro de Verificación Vehicular No.
                      {{ userId.substring(4, userId.length) }}</q-item-section
                    >
                  </q-item>
                  <br />
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Nombre del Técnico</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        disable
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
                        disable
                        v-model="deposit.odometroid"
                        label="ID"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs"
                        >Línea Verificadora</q-item-label
                      >
                      <q-input
                        dense
                        outlined
                        disable
                        v-model="deposit.lineaverifica"
                        label="Línea Verificadora"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
                <center>
                  <q-btn
                    color="white"
                    text-color="primary"
                    icon-right="send"
                    label="Iniciar Verificación"
                    no-caps
                    :disable="iniciarVerificacionbutton"
                    @click="addCar"
                  />
                </center>
              </q-form>
            </q-card-section>
            <q-inner-loading :showing="loadingvisible">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="takingValues" persistent>
      <q-card class="my-card" flat bordered style="width: 4085px">
        <q-card-section>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="valores" label="Valores Capturados" />
            <q-tab name="visual" label="Inspección Visual" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="valores">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-table
                  title="Toma de valores"
                  :data="depositCurrentValues"
                  :hide-header="mode === 'grid'"
                  :columns="columnsCurrentValues"
                  row-key="name"
                  :grid="mode == 'grid'"
                  :filter="filter"
                  :pagination.sync="pagination"
                >
                </q-table>
              </div>
            </q-tab-panel>
            <q-tab-panel name="visual">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-table
                  title="Inspección Visual"
                  :data="depositCurrentValuesVisual"
                  :hide-header="mode === 'grid'"
                  :columns="columnsCurrentValuesVisual"
                  row-key="name"
                  :grid="mode == 'grid'"
                  :filter="filter"
                  :pagination.sync="pagination"
                >
                </q-table>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div v-if="showButtonVoucher">
            <center>
              <q-btn
                color="green"
                icon-right="archive"
                label="Descargar Comprobante"
                no-caps
                @click="downloadVoucher"
              />
            </center>
          </div>
          <div v-if="!showButtonVoucher">
            <q-linear-progress size="25px" :value="progress1" color="primary">
            </q-linear-progress>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Vue from "vue";
import IEcharts from "vue-echarts-v3/src/full.js";
import axios from "axios";
import lockr from "lockr";
import jsPDF from "jspdf";
import "jspdf-autotable";
import image from "../assets/edomex.png";
import firma from "../assets/firma.png";
import no from "../assets/no.png";
import doblecero from "../assets/00.png";
import cero from "../assets/0.png";
import uno from "../assets/1.png";
import dos from "../assets/2.png";

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
      progress1: 0,
      showButtonVoucher: false,
      takingValues: false,
      showAsignations: false,
      loadingvisible: false,
      showSimulatedReturnData: false,
      multasFlag: false,
      tab: "valores",
      pagination: {
        rowsPerPage: 10,
      },
      filter: "",
      depositCurrentValues: [
        {
          parametro: "Oxígeno (O2)",
          valor: "",
        },
        {
          parametro: "Monóxido de Carbono (CO)",
          valor: "",
        },
        {
          parametro: "Dióxido de Carbono (CO2)",
          valor: "",
        },
        {
          parametro: "Factor Lambda",
          valor: "",
        },
        {
          parametro: "Hidrocarburos",
          valor: "",
        },
        {
          parametro: "Óxidos de Nitrógeno (NOx ppm)",
          valor: "",
        },
      ],
      depositCurrentValuesVisual: [
        {
          parametro: "Filtro de Aire",
          valor: "",
        },
        {
          parametro: "Luces",
          valor: "",
        },
        {
          parametro: "Manguera de Vacío",
          valor: "",
        },
        {
          parametro: "Llantas",
          valor: "",
        },
        {
          parametro: "Tapa de Gasolina",
          valor: "",
        },
        {
          parametro: "Tapón del Radiador",
          valor: "",
        },
        {
          parametro: "Tubo de escape",
          valor: "",
        },
      ],
      columnsCurrentValues: [
        {
          name: "parametro",
          align: "left",
          label: "Parámetro",
          field: "parametro",
          sortable: true,
        },
        {
          name: "valor",
          align: "left",
          label: "Valor",
          field: "valor",
          sortable: true,
        },
      ],
      columnsCurrentValuesVisual: [
        {
          name: "parametro",
          align: "left",
          label: "Parámetro",
          field: "parametro",
          sortable: true,
        },
        {
          name: "valor",
          align: "left",
          label: "Valor",
          field: "valor",
          sortable: true,
        },
      ],
      iniciarVerificacionbutton: false,
      arrayTecnicoName: [
        "Juan Aguilar j832812",
        "Cristian Cerda c89282",
        "Balbina Lopez b38227",
        "Iman Villa i7872392",
        "Carlos Ferrero j892389",
        "Julian Bartolome b47893h",
        "Ana Isabel Singh a849323",
        "Covadonga Cuadrado h782382",
        "Arantxa Paz a0490232",
        "Luciano Ramiro l898371",
        "Maria Canto m4727832",
        "Isabel Llorente f893798",
        "Pedro Antonio p381123",
        "Michael Guijarro m389742",
        "Hilario Lujan h382384",
      ],
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
    userId() {
      return lockr.get("userId");
    },
    currentToken() {
      return lockr.get("currentToken");
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
    downloadVoucher() {
      let vm = this;
      vm.insertAllData = false;
      vm.iniciarVerificacionbutton = false;
      vm.multasFlag = false;
      vm.takingValues = false;
      vm.pdf();
    },
    showTextLoading() {
      let vm = this;
      vm.loadingvisible = true;
      vm.showSimulatedReturnData = false;

      setTimeout(() => {
        vm.loadingvisible = false;
        vm.showSimulatedReturnData = true;
      }, 1000);
    },
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
      vm.takingValues = true;
      vm.iniciarVerificacionbutton = true;
      //Obteniendo el id mayor
      await vm.ConectDB();
      let max = parseInt(vm.maxId) + 1;
      console.log("Valor max actual de la PK en BD==>", max);
      debugger;
      let token = vm.currentToken;
      vm.deposit.verificentroid = vm.userId;
      vm.deposit.validadorid = "V" + Math.round(Math.random() * 10);
      vm.deposit.status = "Por validar";
      vm.deposit.id = max;
      vm.deposit.createdate = vm.currentDate();
      vm.deposit.updatedate = "--";
      vm.deposit.hologramaObtenido = "--";
      vm.deposit.ccvvalid = vm.asignarCVVValidador(
        vm.deposit.verificentroid.substring(4, vm.deposit.verificentroid.length)
      );
      console.log("Agregando el registro al ledger" + vm.deposit.id);
      vm.insertLedger(token);
    },
    si_no() {
      let num = Math.round(Math.random() * 10);
      if (num > 7) {
        return "No";
      } else {
        return "Si";
      }
    },
    async insertLedger(token) {
      let vm = this;
      if (vm.multasFlag == false) {
        //Generando los datos aleatorios del Odometro e inspección visual
        vm.deposit.co =
          (Math.random() * (3 + 1 - 0.1) + 0.1).toFixed(2) + "% vol"; //Entre 0.1 y 3.0
        vm.deposit.co2 =
          (Math.random() * (17 + 1 - 13) + 13).toFixed(2) + "% vol"; //Entre 13.0 y 17.0
        vm.deposit.o2 =
          (Math.random() * (2 + 1 - 0.1) + 0.1).toFixed(2) + "% vol"; //Entre 0.1 y 2.0
        vm.deposit.noxppm =
          Math.round(Math.random() * (2200 + 1 - 250) + 250) + " (ppm)"; //Entre 250 y 2200
        vm.deposit.hidrocarburo =
          Math.round(Math.random() * (400 + 1 - 50) + 50) + " (ppm)"; //Entre 50 y 400
        vm.deposit.lambda = (Math.random() * (1.1 + 1 - 1) + 1).toFixed(2); //Entre 1.0 y 1.1
        vm.deposit.tapagasolina = await vm.si_no();
        vm.deposit.bayonetaaceite = await vm.si_no();
        vm.deposit.filtroaire = await vm.si_no();
        vm.deposit.tuboescape = await vm.si_no();
        vm.deposit.taponradiador = await vm.si_no();
        vm.deposit.mangueravacio = await vm.si_no();
        vm.deposit.ruedas = await vm.si_no();
        vm.deposit.lucestyd = await vm.si_no();
        //Simulando la carga de datos en tiempo real
        vm.depositCurrentValues[0].valor = vm.deposit.o2;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValues[1].valor = vm.deposit.co;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValues[2].valor = vm.deposit.co2;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValues[3].valor = vm.deposit.lambda;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValues[4].valor = vm.deposit.hidrocarburo;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValues[5].valor = vm.deposit.noxppm;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        debugger;
        vm.tab = "visual";
        vm.depositCurrentValuesVisual[0].valor = vm.deposit.filtroaire;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[1].valor = vm.deposit.lucestyd;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[2].valor = vm.deposit.mangueravacio;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[3].valor = vm.deposit.ruedas;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[4].valor = vm.deposit.tapagasolina;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[5].valor = vm.deposit.taponradiador;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(1000);
        vm.depositCurrentValuesVisual[6].valor = vm.deposit.tuboescape;
        vm.progress1 = vm.progress1 + 0.088;
      } else {
        vm.takingValues = true;
        //Simulando la carga de datos en tiempo real
        vm.depositCurrentValues[0].valor = vm.deposit.o2;
        vm.progress1 = vm.progress1 + 0.076;

        await vm.sleep(500);
        vm.depositCurrentValues[1].valor = vm.deposit.co;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValues[2].valor = vm.deposit.co2;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValues[3].valor = vm.deposit.lambda;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValues[4].valor = vm.deposit.hidrocarburo;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValues[5].valor = vm.deposit.noxppm;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        debugger;
        vm.tab = "visual";
        vm.depositCurrentValuesVisual[0].valor = vm.deposit.filtroaire;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[1].valor = vm.deposit.lucestyd;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[2].valor = vm.deposit.mangueravacio;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[3].valor = vm.deposit.ruedas;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[4].valor = vm.deposit.tapagasolina;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[5].valor = vm.deposit.taponradiador;
        vm.progress1 = vm.progress1 + 0.076;
        await vm.sleep(500);
        vm.depositCurrentValuesVisual[6].valor = vm.deposit.tuboescape;
        vm.progress1 = vm.progress1 + 0.088;
      }
      let arg = [
        '{"id":"' +
          vm.deposit.id +
          '","marca":"' +
          vm.deposit.marca +
          '","modelo":"' +
          vm.deposit.modelo +
          '","placas":"' +
          vm.deposit.placas +
          '","niv":"' +
          vm.deposit.niv +
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
          '","hologramaObtenido":"' +
          vm.deposit.hologramaObtenido +
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
      debugger;
      await axios.post(
        "http://localhost:4000/channels/mychannel/chaincodes/fabcar",
        body,
        config
      );
      console.log("Auto agregado al Ledger");
      this.$q.notify({
        message: "Datos registrados con éxito, favor de esperar autenticación",
      });
      vm.showButtonVoucher = true;
    },
    showLoading(tipo) {
      if (tipo == "multas") {
        this.$q.loading.show({
          message: "<b>Consultando el sistema de multas...<b>",
        });
        // hiding in 2s
        this.timer = setTimeout(() => {
          this.$q.loading.hide();
          this.timer = void 0;
        }, 3000);
      }
      if (tipo == "asignar") {
        this.$q.loading.show({
          message: "<b>Asignando Técnico y Linea de Verificación...<b>",
        });
        // hiding in 2s
        this.timer = setTimeout(() => {
          this.$q.loading.hide();
          this.timer = void 0;
        }, 6000);
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async validarAutoMulta() {
      let vm = this;
      vm.showButtonVoucher = false;
      await vm.showLoading("multas");
      await vm.sleep(2001);
      //Obteniendo el id mayor de todos los registros
      await vm.ConectDB();
      let max = parseInt(vm.maxId) + 1;
      console.log("Soy el valor max de la PK", max);
      //Verificando que se metan todos los valores
      if (
        vm.deposit.marca &&
        vm.deposit.modelo &&
        vm.deposit.placas &&
        vm.deposit.niv
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
          vm.deposit.hologramaObtenido = "--";
          vm.deposit.odometroid = "--";
          vm.deposit.validadorid = "--";
          vm.deposit.lineaverifica = "--";
          vm.deposit.status = "Rechazado";
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
          debugger;
          vm.multasFlag = true;
          vm.insertLedger(token);
        } else {
          vm.iniciarVerificacionbutton = 1;
          console.log("El auto No tiene multas, adelante");
          vm.insertAllData = true;
          this.$q.notify({
            message: "Sin multas, adelante ",
          });
          vm.showAsignations = true;
          //Asignando al tecnico odometro y linea
          vm.deposit.tecnicoid =
            vm.arrayTecnicoName[Math.round(Math.random() * 10)]; //Entre 0 y 10
          vm.deposit.odometroid = Math.round(Math.random() * 100); //Entre 0 y 100
          vm.deposit.lineaverifica = parseInt(Math.random() * (4 - 1) + 1);
          await vm.showLoading("asignar");
          //await vm.sleep(7000);
          //vm.showTextLoading();
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
          (day < 10 ? "0" + day : day) +
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
          (day < 10 ? "0" + day : day) +
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
      debugger;
      if (randomNumber == currentCVV) {
        vm.asignarCVVValidador(currentCVV);
      } else {
        var Org = "CVV_" + randomNumber;
        if (Org == undefined) {
          debugger;
          vm.asignarCVVValidador(currentCVV);
        } else {
          return Org;
        }
      }
    },
    pdf() {
      let vm = this;
      let doc = new jsPDF();
      //Header
      var imgLogo = new Image();
      imgLogo.src = image;
      doc.addImage(imgLogo, "PNG", 10, 5, 60, 20);
      doc.setFontSize(11);
      doc.text("Estatus: " + vm.deposit.status, 150, 15, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Fecha: " + vm.currentDate(), 150, 25, {
        maxWidth: 510,
        align: "justify",
      });
      //TItle
      doc.setFontSize(14);
      doc.line(10, 30, 200, 30);
      doc.text("Comprobante de Verificación Vehicular", 65, 40, {
        maxWidth: 510,
        align: "justify",
      });
      doc.setFontSize(11);
      //General Data
      //Primera Columna
      doc.text("Placas: " + vm.deposit.placas, 100, 50, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("NIV: " + vm.deposit.niv, 100, 55, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Marca: " + vm.deposit.marca, 100, 60, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Modelo: " + vm.deposit.modelo, 100, 65, {
        maxWidth: 510,
        align: "justify",
      });
      //Segunda Columna
      doc.text("CVV Origen: " + vm.deposit.verificentroid, 15, 50, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Técnico ID: " + vm.deposit.tecnicoid, 15, 55, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Número de linea: " + vm.deposit.lineaverifica, 15, 60, {
        maxWidth: 510,
        align: "justify",
      });
      doc.text("Odómetro ID: " + vm.deposit.odometroid, 15, 65, {
        maxWidth: 510,
        align: "justify",
      });

      //Load the Holograma images
      var imgno = new Image();
      var imgdoblecero = new Image();
      var imgcero = new Image();
      var imguno = new Image();
      var imgdos = new Image();
      imgno.src = no;
      imgdoblecero.src = doblecero;
      imgcero.src = cero;
      imguno.src = uno;
      imgdos.src = dos;
      if (
        vm.deposit.status == "Por validar" ||
        vm.deposit.hologramaObtenido == "Sin Holograma"
      ) {
        doc.addImage(imgno, "PNG", 160, 40, 35, 35);
      }
      if (vm.deposit.hologramaObtenido == "Doble Cero") {
        doc.addImage(imgdoblecero, "PNG", 160, 40, 35, 35);
      }
      if (vm.deposit.hologramaObtenido == "Cero") {
        doc.addImage(imgcero, "PNG", 160, 40, 35, 35);
      }
      if (vm.deposit.hologramaObtenido == "Uno") {
        doc.addImage(imguno, "PNG", 160, 40, 35, 35);
      }
      if (vm.deposit.hologramaObtenido == "Dos") {
        doc.addImage(imgdos, "PNG", 160, 40, 35, 35);
      }

      //Table 2
      debugger;
      let paramsCapturados = [
        {
          parametro: "Oxígeno (O2)",
          valor: vm.deposit.o2,
        },
        {
          parametro: "Monóxido de Carbono (CO)",
          valor: vm.deposit.co,
        },
        {
          parametro: "Dióxido de Carbono (CO2)",
          valor: vm.deposit.co2,
        },
        {
          parametro: "Factor Lambda	",
          valor: vm.deposit.lambda,
        },
        {
          parametro: "Hidrocarburos",
          valor: vm.deposit.hidrocarburo,
        },
        {
          parametro: "Óxidos de Nitrógeno (NOx ppm)",
          valor: vm.deposit.noxppm,
        },
      ];
      var tableHeader = [
        { title: "Parámetro", dataKey: "parametro" },
        { title: "Valor", dataKey: "valor" },
      ];
      doc.text("Valores Capturados e Inspección Visual", 70, 85, {
        maxWidth: 510,
        align: "justify",
      });
      doc.autoTable(tableHeader, paramsCapturados, {
        //For more details of styles in tables https://github.com/simonbengtsson/jsPDF-AutoTable
        margin: { top: 90 },
        theme: "grid",
        headStyles: { fontSize: 8, halign: "center" },
        bodyStyles: { fontSize: 8, halign: "center" },
      });
      //Table 2
      let paramsVisual = [
        {
          parametro: "Filtro de Aire",
          valor: vm.deposit.filtroaire,
        },
        {
          parametro: "Luces",
          valor: vm.deposit.lucestyd,
        },
        {
          parametro: "Manguera de Vacío",
          valor: vm.deposit.mangueravacio,
        },
        {
          parametro: "Llantas",
          valor: vm.deposit.ruedas,
        },
        {
          parametro: "Tapa de Gasolina",
          valor: vm.deposit.tapagasolina,
        },
        {
          parametro: "Tapón del Radiador",
          valor: vm.deposit.taponradiador,
        },
        {
          parametro: "Tubo de escape",
          valor: vm.deposit.tuboescape,
        },
      ];
      var tableHeader1 = [
        { title: "Parámetro", dataKey: "parametro" },
        { title: "Valor", dataKey: "valor" },
      ];
      doc.autoTable(tableHeader1, paramsVisual, {
        margin: { top: 30 },
        theme: "grid",
        headStyles: { fontSize: 8, halign: "center" },
        bodyStyles: { fontSize: 8, halign: "center" },
      });
      doc.text(
        "Documento no oficial, válido unicamente para propósitos administrativos dentro del Centro de Verificación Vehicular origen. Los resultados presentados deberán ser validados por alguna entidad verificadora diferente a la origen, por lo que se deberá revisar el status actual de la transacción así como la fecha en la que se genera el presente documento.",
        15,
        210,
        { maxWidth: 180, align: "justify" }
      );

      var firmaImagen = new Image();
      firmaImagen.src = firma;
      if (vm.deposit.status != "Por validar") {
        doc.addImage(firmaImagen, "PNG", 70, 240, 60, 20);
      }
      doc.setFontSize(12);
      doc.line(50, 260, 150, 260);
      doc.text("Ing. Rogelio Sanchez Campos", 70, 265, {
        maxWidth: 510,
        align: "justify",
      });

      doc.save(vm.deposit.niv + ".pdf");
      vm.deposit = {};
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

button {
  margin: 13px;
}
</style>
