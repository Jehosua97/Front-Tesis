<template>
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
                props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
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
            @click="exportTable"
          />
        </template>
        <template v-slot:body-cell-detail="props">
          <q-td :props="props">
            <q-btn
              @click="employee_dialog = true"
              dense
              round
              color="secondary"
              icon="pageview"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-stage="props">
          <q-td :props="props">
            <q-chip
              :color="
                props.row.stage == ' '
                  ? 'green'
                  : props.row.stage == 'Cheques'
                  ? 'orange'
                  : 'secondary'
              "
              text-color="white"
              dense
              class="text-weight-bolder"
              square
              style="width: 85px"
              >{{ props.row.stage }}
            </q-chip>
          </q-td>
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="employee_dialog">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h6">
            Employee Details
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
              Sales and Marketing Executive | Graduate and past committee |
              Keynote speaker on Selling and Recruiting Topics
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
</template>

<script>
import { exportFile } from "quasar";
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
      filter: "",
      mode: "list",
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
          label: "Fecha autenticación",
          field: "updatedate",
          sortable: true,
        },
        {
          name: "detail",
          align: "left",
          label: "Detail",
          field: "detail",
          sortable: true,
        },
        {
          name: "action",
          align: "left",
          label: "Action",
          field: "action",
          sortable: true,
        },
      ],
      deposit: [],
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  computed: {
    userId() {
      this.findCar();
      return lockr.get("userId");
    },
    currentToken() {
      return lockr.get("currentToken");
    },
  },
  methods: {
    exportTable() {
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

      const status = exportFile(
        "employee_salary_list.csv",
        content,
        "text/csv"
      );

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
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
      const response = await axios.post(
        "http://localhost:5984/mychannel_fabcar/_find",
        body,
        config
      );
      console.log("Respuesta de la busqueda por CVV Validador===>", response);
      if (response.data.docs.length == 0) {
        this.$q.notify({
          message: "No se han encontrado registros para " + vm.deposit.niv,
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
  },
};
</script>
<style>
.q-chip__content {
  display: block;
  text-align: center;
}
</style>
