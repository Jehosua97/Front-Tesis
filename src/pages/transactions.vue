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
      <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <q-card flat bordered class>
            <q-card-section>
              <div class="text-h6">Transacciones asignadas</div>
              <q-btn
                color="primary"
                icon-right="archive"
                label="Export to csv"
                no-caps
                @click="SearchDB"
              />
            </q-card-section>

            <q-separator inset> </q-separator>

            <q-card-section>
              <q-table
                :data="data"
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
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
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
              </q-table>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { exportFile } from "quasar";
import axios from "axios";

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
      filter: "",
      mode: "list",
      deposit: {},
      pagination: {
        rowsPerPage: 10,
      },
      options: [
        "National Bank",
        "Bank of Asia",
        "Corporate Bank",
        "Public Bank",
      ],
      columns: [
        {
          name: "Id",
          align: "left",
          label: "ID",
          field: "id",
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
          align: "left",
          label: "Marca",
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
          name: "Fecha",
          align: "left",
          label: "Fecha",
          field: "createdate",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },
      ],
      data: [
        {
          id: "1",
          placas:"",
          marca:"",
          modelo:"",
          createdate:"",
          status:""
        },
        {
          id: "1",
          description: "Pvt Ltd Invoice",
          amount: "$ 300",
        },
        {
          id: "1",
          description: "Invoice 6 Payment",
          amount: "$ 250",
        },
        {
          id: "1",
          description: "Invoice 18 Payment",
          amount: "$ 400",
        },
        {
          id: "1",
          description: "John and company Payment",
          amount: "$ 500",
        },
      ],
    };
  },
  methods: {
    exportDepositsTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.data.map((row) =>
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
    async SearchDB(verificentroid) {
      let vm = this;
      var username = "admin";
      var password = "adminpw";
      let body = {
        selector: {
          "verificentroid": verificentroid
        },
      };
      let config = {
        auth: {
          username: username,
          password: password,
        },
      };
      const response = await axios
        .post("http://localhost:5984/mychannel_fabcar/_find", body, config)
        vm.data = response.data.docs
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
    vm.showLoading();
    let veri = "CVV-1" //Hacer esto dinamico
    await vm.SearchDB(veri);
  },
};
</script>

<style scoped></style>
