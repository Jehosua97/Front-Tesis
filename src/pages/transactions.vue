<template>
  <q-page>
    <div class="q-ma-md">
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-dark">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >{{ totalAsignadas }}</q-item-label
                  >
                  <q-item-label class="text-dark-4"
                    >Total de Ordenes Asignadas</q-item-label
                  >
                </q-item-section>

                <q-item-section side>
                  <q-icon name="assignment" class="box_1" size="60px"></q-icon>
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-1" style="width: 70%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-dark">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >{{ porRevisar }}</q-item-label
                  >
                  <q-item-label class="text-dark-4">Por Revisar</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon
                    name="o_account_balance_wallet"
                    class="box_2"
                    size="60px"
                  ></q-icon>
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-2" style="width: 40%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-dark">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >{{ revisadas }}</q-item-label
                  >
                  <q-item-label class="text-dark-4">Revisadas</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon
                    name="o_account_balance"
                    class="box_3"
                    size="60px"
                  ></q-icon>
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-3" style="width: 80%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-dark">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >1</q-item-label
                  >
                  <q-item-label class="text-dark-4"
                    >Usuarios Activos</q-item-label
                  >
                </q-item-section>

                <q-item-section side>
                  <q-icon name="o_people" class="box_4" size="60px"></q-icon>
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-4" style="width: 30%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 box_4">
        <q-page class="q-pa-sm">
          <q-card>
            <q-table
              title="Transacciones Asignadas"
              :data="deposit"
              :hide-header="mode === 'grid'"
              :columns="columns"
              row-key="name"
              :grid="mode == 'grid'"
              :filter="filter"
              :pagination.sync="pagination"
            >
              <template v-slot:top-right="props">
                <q-input
                  outlined
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>

                <q-btn
                  flat
                  round
                  dense
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  v-if="mode === 'list'"
                >
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >{{
                      props.inFullscreen
                        ? "Exit Fullscreen"
                        : "Toggle Fullscreen"
                    }}
                  </q-tooltip>
                </q-btn>

                <q-btn
                  flat
                  round
                  dense
                  :icon="mode === 'grid' ? 'list' : 'grid_on'"
                  @click="
                    mode = mode === 'grid' ? 'list' : 'grid';
                    separator = mode === 'grid' ? 'none' : 'horizontal';
                  "
                  v-if="!props.inFullscreen"
                >
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >{{ mode === "grid" ? "List" : "Grid" }}
                  </q-tooltip>
                </q-btn>

                <q-btn
                  color="primary"
                  icon-right="archive"
                  label="Export to csv"
                  no-caps
                  @click="exportDepositsTable"
                />
              </template>
              <template v-slot:body-cell-detalles="propsDet">
                <q-td :props="propsDet">
                  <q-btn
                    @click="showItem(propsDet)"
                    dense
                    round
                    color="secondary"
                    icon="pageview"
                  />
                </q-td>
              </template>
              <template v-slot:body-cell-status="props">
                <q-td :props="props">
                  <q-chip
                    :color="
                      props.row.status == 'Por validar'
                        ? 'orange'
                        : props.row.status == 'Rechazado'
                        ? 'red'
                        : 'green'
                    "
                    text-color="white"
                    dense
                    class="text-weight-bolder"
                    square
                    style="width: 85px"
                    >{{ props.row.status }}
                  </q-chip>
                </q-td>
              </template>
            </q-table>
          </q-card>
        </q-page>
      </div>
    </div>
    <q-dialog v-model="employee_dialog">
      <q-card class="my-card" flat bordered style="width: 4085px">
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">
            Detalles de la Prueba
            <q-btn
              round
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </div>
          <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="text-h7 q-mt-sm q-mb-xs">
                Placas: {{ dataSelected.placas }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                NIV: {{ dataSelected.niv }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                Marca: {{ dataSelected.marca }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                Modelo:{{ dataSelected.modelo }}
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="text-h7 q-mt-sm q-mb-xs">
                CVV Origen: {{ dataSelected.verificentroid }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                Técnico ID: {{ dataSelected.tecnicoid }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                Número de linea: {{ dataSelected.lineaverifica }}
              </div>
              <div class="text-h7 q-mt-sm q-mb-xs">
                Odómetro ID: {{ dataSelected.odometroid }}
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="this.itemActual.status == 'Por validar'">
              <q-btn
                v-on:click="asignarHologramaShow = true"
                color="primary"
                icon-right="send"
                label="Asignar Holograma"
                :disable="this.itemActual.status == 'Validado'"
              />
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="this.itemActual.status == 'Validado' || this.itemActual.status == 'Rechazado'">
              <q-chip
                :color="
                  this.itemActual.status == 'Por validar'
                    ? 'orange'
                    : this.itemActual.status == 'Rechazado'
                    ? 'red'
                    : 'green'
                "
                text-color="white"
                dense
                class="text-weight-bolder"
                square
                style="width: 85px"
                >{{ this.itemActual.status }}
              </q-chip>
            </div>
          </div>
        </q-card-section>
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
      </q-card>
    </q-dialog>

    <q-dialog v-model="asignarHologramaShow">
      <q-card class="my-card" flat bordered style="width: 550px">
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">
            Asignación de Holograma
            <q-btn
              round
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </div>
          <div class="q-gutter-sm">
            <q-radio
              keep-color
              v-model="hologramaSelected"
              val="Doble Cero"
              label="Doble Cero"
              color="teal"
            />
            <q-radio
              keep-color
              v-model="hologramaSelected"
              val="Cero"
              label="Cero"
              color="yellow"
            />
            <q-radio
              keep-color
              v-model="hologramaSelected"
              val="Uno"
              label="Uno"
              color="orange"
            />
            <q-radio
              keep-color
              v-model="hologramaSelected"
              val="Dos"
              label="Dos"
              color="red"
            />
            <q-radio
              keep-color
              v-model="hologramaSelected"
              val="Sin Holograma"
              label="Sin Holograma"
              color="dark"
            />
          </div>
          <div class="q-pa-md" style="max-width: 500px">
            <q-input
              v-model="coment"
              filled
              type="textarea"
              placeholder="Comentario (Opcional)"
            />
          </div>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="primary"
                label="Guardar y Descargar Comprobante"
                @click="asignaHolograma()"
              />
            </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { exportFile } from "quasar";
import axios from "axios";
import lockr from "lockr";

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
      coment:"",
      hologramaSelected:"",
      itemActual:{},
      asignarHologramaShow: false,
      tab: "valores",
      dataSelected: {},
      totalAsignadas: 0,
      porRevisar: 0,
      revisadas: 0,
      invoice: {},
      employee_dialog: false,
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
      depositCurrentValues: [],
      depositCurrentValuesVisual: [],
      columns: [
        {
          name: "niv",
          align: "left",
          label: "NIV",
          field: "niv",
          sortable: true,
        },
        {
          name: "placas",
          align: "left",
          label: "Placas",
          field: "placas",
          sortable: true,
        },
        {
          name: "marca",
          required: true,
          label: "Marca",
          align: "left",
          field: "marca",
          sortable: true,
        },
        {
          name: "modelo",
          align: "left",
          label: "Modelo",
          field: "modelo",
          sortable: true,
        },
        {
          name: "createdate",
          align: "left",
          label: "Fecha de ingreso",
          field: "createdate",
          sortable: true,
        },
        {
          name: "updatedate",
          align: "left",
          label: "Fecha de Validación",
          field: "updatedate",
          sortable: true,
        },
        {
          name: "hologramaObtenido",
          align: "left",
          label: "Holograma Obtenido",
          field: "hologramaObtenido",
          sortable: true,
        },
        {
          name: "detalles",
          align: "left",
          label: "Detalles",
          field: "detalles",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          sortable: true,
        },
      ],
      deposit: [],
      pagination: {
        rowsPerPage: 10,
      },
      filter: "",
      mode: "list",
      pagination: {
        rowsPerPage: 10,
      },
      options: [
        "National Bank",
        "Bank of Asia",
        "Corporate Bank",
        "Public Bank",
      ],
    };
  },
  computed: {
    userId() {
      return lockr.get("userId");
    },
    currentToken() {
      return lockr.get("currentToken");
    },
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async asignaHolograma() {
      let vm = this;
      vm.asignarHologramaShow = false;
      await vm.sleep(2000);
      vm.employee_dialog = false;
      console.log("Soy el item del holograma===", vm.itemActual);
      await vm.insertLedger(vm.currentToken);
      await vm.findCar();
    },
    showItem(item) {
      console.log("Soy el item actual==>", item.row);
      this.itemActual = item.row;
      this.depositCurrentValues = [
        {
          parametro: "Oxígeno (O2)",
          valor: item.row.o2,
        },
        {
          parametro: "Monóxido de Carbono (CO)",
          valor: item.row.co,
        },
        {
          parametro: "Dióxido de Carbono (CO2)",
          valor: item.row.co2,
        },
        {
          parametro: "Factor Lambda",
          valor: item.row.lambda,
        },
        {
          parametro: "Hidrocarburos",
          valor: item.row.hidrocarburo,
        },
        {
          parametro: "Óxidos de Nitrógeno (NOx ppm)",
          valor: item.row.noxppm,
        },
      ];
      this.depositCurrentValuesVisual = [
        {
          parametro: "Filtro de Aire",
          valor: item.row.filtroaire,
        },
        {
          parametro: "Luces",
          valor: item.row.lucestyd,
        },
        {
          parametro: "Manguera de Vacío",
          valor: item.row.mangueravacio,
        },
        {
          parametro: "Llantas",
          valor: item.row.ruedas,
        },
        {
          parametro: "Tapa de Gasolina",
          valor: item.row.tapagasolina,
        },
        {
          parametro: "Tapón del Radiador",
          valor: item.row.taponradiador,
        },
        {
          parametro: "Tubo de escape",
          valor: item.row.tuboescape,
        },
      ];
      this.employee_dialog = true;
      this.dataSelected = item.row;
    },
    exportDepositsTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.deposit.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("deposits.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
    showLoading() {
      this.$q.loading.show({
        message: "<b>Cargando los datos, por favor espere...<b>",
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 3000);
    },
    async findCar() {
      let vm = this;
      //vm.deposit = {}
      var username = "admin";
      var password = "adminpw";
      //Busqueda por CVV Validador
      let body = {
        selector: { ccvvalid: vm.userId },
      };
      let config = {
        auth: {
          username: username,
          password: password,
        },
      };
      debugger;
      const response = await axios.post(
        "http://localhost:5984/mychannel_fabcar/_find",
        body,
        config
      );
      console.log("Respuesta de la busqueda por CVV Validador===>", response);
      if (response.data.docs.length == 0) {
        this.$q.notify({
          message: "No se han encontrado registros para " + vm.userId,
        });
        vm.deposit = {};
        vm.totalAsignadas = 0;
        vm.porRevisar = 0;
        vm.revisadas = 0;
      } else {  
        //Llenando los valores de la busqueda
        vm.deposit = response.data.docs;
        console.log("Objeto deposit ===>", vm.deposit);
        vm.totalAsignadas = vm.deposit.length;
        for (let i = 0; i < vm.deposit.length; i++) {
          if (vm.deposit[i].status == "Por validar") {
            vm.porRevisar++;
          }
        }
        vm.revisadas = vm.totalAsignadas - vm.porRevisar;
        vm.dataSelected = vm.deposit;
        vm.$forceUpdate();
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
          (day < 10 ? "0"+day : day)  +
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
          (day < 10 ? "0"+day : day)  +
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
    async insertLedger(token) {
      let vm = this;
      console.log("Soy el holograma seleccionado==== ",vm.hologramaSelected);
      let miStatus = ""
      if(vm.hologramaSelected == "Sin Holograma"){
        miStatus = "Rechazado"
      }else{
        miStatus = "Validado"
      }
      let updateDate = await vm.currentDate();
      let arg = [
        '{"id":"' +
          vm.itemActual.id +
          '","marca":"' +
          vm.itemActual.marca +
          '","modelo":"' +
          vm.itemActual.modelo +
          '","placas":"' +
          vm.itemActual.placas +
          '","niv":"' +
          vm.itemActual.niv +
          '","verificentroid":"' +
          vm.itemActual.verificentroid +
          '","tecnicoid":"' +
          vm.itemActual.tecnicoid +
          '","odometroid":"' +
          vm.itemActual.odometroid +
          '","validadorid":"' +
          vm.itemActual.validadorid +
          '","lineaverifica":"' +
          vm.itemActual.lineaverifica +
          '","status":"' +
          miStatus +
          '","co":"' +
          vm.itemActual.co +
          '","co2":"' +
          vm.itemActual.co2 +
          '","o2":"' +
          vm.itemActual.o2 +
          '","noxppm":"' +
          vm.itemActual.noxppm +
          '","hidrocarburo":"' +
          vm.itemActual.hidrocarburo +
          '","lambda":"' +
          vm.itemActual.lambda +
          '","ccvvalid":"' +
          vm.itemActual.ccvvalid +
          '","validadorid":"' +
          vm.itemActual.validadorid +
          '","tapagasolina":"' +
          vm.itemActual.tapagasolina +
          '","bayonetaaceite":"' +
          vm.itemActual.bayonetaaceite +
          '","filtroaire":"' +
          vm.itemActual.filtroaire +
          '","tuboescape":"' +
          vm.itemActual.tuboescape +
          '","taponradiador":"' +
          vm.itemActual.taponradiador +
          '","mangueravacio":"' +
          vm.itemActual.mangueravacio +
          '","ruedas":"' +
          vm.itemActual.ruedas +
          '","lucestyd":"' +
          vm.itemActual.lucestyd +
          '","createdate":"' +
          vm.itemActual.createdate +
          '","updatedate":"' +
          updateDate +
          '","hologramaObtenido":"' +
          vm.hologramaSelected +
          '"}',
      ];
      console.log(arg);
      let body = {
        fcn: "CreateCar",
        chaincodeName: "fabcar",
        channelName: "mychannel",
        args: arg,
      };
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("Deposit " + vm.itemActual);
      debugger
      await axios
        .post(
          "http://localhost:4000/channels/mychannel/chaincodes/fabcar",
          body,
          config
        )
      vm.itemActual = {};
      console.log("Auto actualizado en Ledger");
      this.$q.notify({
            message: "Datos ingresados con éxito",
          });
      vm.$forceUpdate();
    },
    beforeDestroy() {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        this.$q.loading.hide();
      }
    },
  },
  async beforeMount() {
    let vm = this;
    await vm.findCar();
    vm.showLoading();
  },
};
</script>

<style scoped></style>
