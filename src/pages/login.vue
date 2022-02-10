<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div
          id="particles-js"
          :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
        ></div>
        <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />

        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '30%' }
          "
        >
          <q-img src="../assets/veri.png"></q-img>
          <q-card-section class=bg-blue-grey-4>
            <q-avatar
              size="74px"
              class="absolute"
              style="top: 0; right: 25px; transform: translateY(-50%)"
            >
              <img src="../assets/CVV.png"/>
            </q-avatar>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Ingrese usuario y contraseña
              </div>
            </div>
          </q-card-section>
          <q-card-section >
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Usuario" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Contraseña"
                lazy-rules
              />
              <div>
                <q-btn
                  label="Ingresar"
                  type="button"
                  color="primary"
                  @click="loginSubmit"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>


<script>
import axios from "axios";
import { saveAs } from "file-saver";
import fs from "fs";
import dashboardVue from "./dashboard.vue";
import lockr from "lockr";

export default {
  data() {
    return {
      username: "",
      password: "",
      userSting: "",
      token: "",
      users: [
        "CVV_1",
        "CVV_2",
        "CVV_3",
        "CVV_4",
        "CVV_5",
        "CVV_6",
        "CVV_7",
        "CVV_8",
        "CVV_9",
        "CVV_10",
      ],
      passwd: [],
      stringPwd: "",
      route: "",
      config: {
        auth: {
          username: "admin",
          password: "adminpw",
        },
      },
    };
  },
  methods: {
    loginNotify() {
      this.$q.notify({
        message: "Bienvenido",
      });
    },
    errorloginNotify() {
      this.$q.notify({
        message: "Usuario o contraseña incorrecto",
      });
    },
    saveStaticDataToFile() {
      let vm = this;
      var blob = new Blob([vm.userSting], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "Users-Passwords.txt");
      console.log();
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async loginSubmit() {
      let vm = this;
      //Autenticando al usuario
      if (vm.users.includes(vm.username) && vm.password == vm.username) {
        console.log("BIENVENIDO USUARIO ====>", vm.username);
        lockr.set("userId", vm.username);
        let flag = 1;
        let index = 0;
        while (flag) {
          let data = await vm.createUsers(vm.username + "_", index);
          //El usuario ya existe en el ledger y se va a registrar en la BD
          console.log(data);
          if (data.data.message.includes("fabric-ca request register failed")) {
            debugger;
            index++;
            await vm.createUsers(
              vm.username.substring(0, vm.username.lastIndexOf("_") + 1),
              index
            );
          } else {
            debugger;
            console.log("Usuario nuevo " + vm.username);
            flag = 0;
            console.log("Soy el Token actual====>", data.data.token);
            lockr.set("currentToken", data.data.token);
            debugger;
            vm.$router.push("/dashboard");
          }
        }
      } else {
        vm.errorloginNotify();
        vm.password = "";
      }
    },
    async createUsers(dinamicUser, index) {
      let vm = this;
      let org = "Org" + vm.username.substring(4);
      let body = {
        username: dinamicUser + index,
        orgName: org,
      };
      //Creando usuario en el ledger
      let data = await axios.post("http://localhost:4000/users", body);
      return data;
    },
  },

  mounted() {
    debugger;
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  },
};
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.normal_gradient {
  background: linear-gradient(145deg, rgb(88, 201, 111) 15%, #1e5259 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);
}
.login-form {
  position: absolute;
}
</style>
