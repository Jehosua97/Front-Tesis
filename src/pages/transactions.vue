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
                    >900</q-item-label
                  >
                  <q-item-label class="text-grey-4">Total Orders</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon
                    name="o_shopping_cart"
                    class="box_1"
                    size="60px"
                  ></q-icon>
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
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >1050</q-item-label
                  >
                  <q-item-label class="text-grey-4"
                    >Total Expenses</q-item-label
                  >
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
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >80 %</q-item-label
                  >
                  <q-item-label class="text-grey-4">Total Profit</q-item-label>
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
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 500; letter-spacing: 3px"
                    >720</q-item-label
                  >
                  <q-item-label class="text-grey-4">New Customers</q-item-label>
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
              title="Transacciones por Validar"
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
                    @click="employee_dialog = true"
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
          <q-dialog v-model="employee_dialog" >
            <q-card class="my-card" flat bordered>
              <q-card-section>
                <div class="text-h6">
                  Detalles de la prueba aplicada
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
              </q-card-section>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">US Region</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Mayank Patel</div>
                  <div class="text-caption text-grey">
                    Sales and Marketing Executive | Graduate and past committee
                    | Keynote speaker on Selling and Recruiting Topics
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/boy-avatar.png"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />
              <q-card-section>
                Assessing clients needs and present suitable promoted products.
                Liaising with and persuading targeted doctors to prescribe our
                products utilizing effective sales skills.
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-page>
      </div>
    </div>
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
      invoice: {},
      employee_dialog: false,
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
        message: "<b>Demo loading screen, replace your message here<b>",
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
      } else {
        //Llenando los valores de la busqueda
        vm.deposit = response.data.docs;
        console.log("Objeto deposit ===>", vm.deposit);
        debugger;
        vm.$forceUpdate();
      }
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
