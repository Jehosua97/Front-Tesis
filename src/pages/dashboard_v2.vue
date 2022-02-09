<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h5">Sistema de Búsqueda</div>
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
                Busqueda de Auto
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
              <q-separator inset></q-separator>
              <q-form>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">NIV</q-item-label>
                      <q-input outlined v-model="deposit.niv" label="NIV" />
                    </q-item-section>
                  </q-item>
                </q-list>
                <center>
                  <q-btn
                    color="primary"
                    label="Buscar Auto"
                    no-caps
                    @click="findCar"
                  />
                  <q-btn
                    outline
                    style="color: primary"
                    icon-right="archive"
                    label="Descargar Comprobante"
                    no-caps
                    :disable="disableVoucherButton"
                    @click="downloadVoucher"
                  />
                </center>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <q-card flat bordered class="">
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
                        disable
                      />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="q-pb-xs">Odómetro ID</q-item-label>
                      <q-input
                        dense
                        outlined
                        v-model="this.deposit.odometroid"
                        label="ID"
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
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
                        disable
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
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
      disableVoucherButton: true,
      autoId: 0,
      deposit: {},
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

      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  computed: {
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
      vm.disableVoucherButton = true;
      vm.pdf();
      vm.deposit = {};
    },
    async findCar() {
      let vm = this;
      vm.disableVoucherButton = true;
      var username = "admin";
      var password = "adminpw";
      if (vm.deposit.niv) {
        //Busqueda por Placas
        let body = {
          selector: { niv: vm.deposit.niv },
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
        console.log("Respuesta de la busqueda por niv===>", response);
        if (response.data.docs.length == 0) {
          this.$q.notify({
            message: "No se han encontrado registros para " + vm.deposit.niv,
          });
          vm.deposit = {};
        } else {
          vm.disableVoucherButton = false;
          //Llenando los valores de la busqueda
          vm.deposit.niv = response.data.docs[0].niv;
          vm.deposit.bayonetaaceite = response.data.docs[0].bayonetaaceite;
          vm.deposit.ccvvalid = response.data.docs[0].ccvvalid;
          vm.deposit.co = response.data.docs[0].co;
          vm.deposit.co2 = response.data.docs[0].co2;
          vm.deposit.createdate = response.data.docs[0].createdate;
          vm.deposit.filtroaire = response.data.docs[0].filtroaire;
          vm.deposit.hidrocarburo = response.data.docs[0].hidrocarburo;
          vm.deposit.id = response.data.docs[0].id;
          vm.deposit.lambda = response.data.docs[0].lambda;
          vm.deposit.lineaverifica = response.data.docs[0].lineaverifica;
          vm.deposit.lucestyd = response.data.docs[0].lucestyd;
          vm.deposit.mangueravacio = response.data.docs[0].mangueravacio;
          vm.deposit.marca = response.data.docs[0].marca;
          vm.deposit.modelo = response.data.docs[0].modelo;
          vm.deposit.noxppm = response.data.docs[0].noxppm;
          vm.deposit.o2 = response.data.docs[0].o2;
          vm.deposit.odometroid = response.data.docs[0].odometroid;
          vm.deposit.placas = response.data.docs[0].placas;
          vm.deposit.ruedas = response.data.docs[0].ruedas;
          vm.deposit.status = response.data.docs[0].status;
          vm.deposit.tapagasolina = response.data.docs[0].tapagasolina;
          vm.deposit.taponradiador = response.data.docs[0].taponradiador;
          vm.deposit.tecnicoid = response.data.docs[0].tecnicoid;
          vm.deposit.hologramaObtenido =
            response.data.docs[0].hologramaObtenido;
          vm.deposit.tuboescape = response.data.docs[0].tuboescape;
          vm.deposit.updatedate = response.data.docs[0].updatedate;
          vm.deposit.validadorid = response.data.docs[0].validadorid;
          vm.deposit.verificentroid = response.data.docs[0].verificentroid;
          console.log("Objeto deposit ===>", vm.deposit);
          vm.$forceUpdate();
        }
      } else {
        this.$q.notify({
          message: "Favor de ingresar el niv",
        });
      }
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
