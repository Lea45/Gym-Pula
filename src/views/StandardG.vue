<template>
  <div class="containter">
    <div class="trening">
      <h1>
        STANDARDNI PROGRAM ZA <br />
        CIJELO TIJELO
      </h1>
      <h3>(teretana)</h3>
      <p>• cilj: oblikovanje i učvršćivanje mišića cijeloga tijela</p>
      <p>
        • 4 treninga za cijelo tijelo: 2 treninga za noge i gluteus, 2 za trbuh,
        ruke i leđa u teretani
      </p>
      <p>
        • potrebni rekviziti: bučice (od minimalno 3 kg), fit band (ili neka
        druga elastična traka), vijača
      </p>
      <p>
        • video svake vježbe pojedinačno (Kristijan i Lea demonstriraju) sa
        objašnjenjem pravilnog izvođenja
      </p>
      <p>• dodatni savjeti oko treninga, ali i prehrane</p>
      <p>
        • program sadržava i upute za zagrijavanje prije treninga, kao i dva
        videa <br />
        sa vježbama za istezanje i masažom uz pomoć foam rollera
      </p>
      <br />
      <ul class="login">
        <li>
          <button
            onclick="document.getElementById('id03').style.display='block'"
          >
            DODAJ U KOŠARICU!
          </button>
        </li>
      </ul>
    </div>
    <div id="id03" class="modal">
      <form
        class="modal-content animate"
        action="/action_page.php"
        method="post"
      >
        <!-- ---------------------------------------------------------- close modal (x) ---------------------------------------------------------------->
        <div class="imgcontainer">
          <span
            onclick="document.getElementById('id03').style.display='none'"
            class="close"
            title="Close Modal"
            >&times;</span
          >
          <img src="images/login.jpg" alt="dumbell" class="dumbell" />
        </div>

        <!-- ------------------------------------------------------- korisničko ime / e-mail ---------------------------------------------------------------->
        <div class="container">
          <label for="uname"><b>E-mail</b></label>
          <input
            type="text"
            v-model="Email"
            placeholder="Unesi e-mail.."
            name="uname"
            required
          />
          <br />

          <!-- ---------------------------------------------------------------- lozinka ---------------------------------------------------------------------->
          <label for="psw"><b>Lozinka</b></label>
          <input
            type="password"
            v-model="Password"
            placeholder="Unesi lozinku..."
            name="psw"
            required
          />
          <br />

          <!-- ---------------------------------------------------------------- trening ---------------------------------------------------------------------->
          <label for="nname"><b>Trening</b></label>
          <select v-model="odabir" name="nname" placeholder="Unesi vjezbu...">
            <option value="CIRKULARNI POLUSATNI PROGRAM">
              CIRKULARNI POLUSATNI PROGRAM
            </option>
            <option value="STANDARDNI PROGRAM ZA CIJELO TIJELO">
              STANDARDNI PROGRAM ZA CIJELO TIJELO
            </option>
            <option value="GLUTEUS PROGRAM">GLUTEUS PROGRAM</option>
          </select>

          <!-- ---------------------------------------------------------------- telefon ---------------------------------------------------------------------->
          <label for="bname"><b>Broj telefona</b></label>
          <input
            type="text"
            v-model="telefon"
            placeholder="Unesi broj telefona..."
            name="bname"
            required
          />

          <!-- ---------------------------------------------------------------- prijava ---------------------------------------------------------------------->
          <button type="button" @click="begin">Prijava</button> <br />
          <br />

          <!-- ---------------------------------------------------------------- zapamti me ---------------------------------------------------------------------->
          <!--<label>
            <input type="checkbox" checked="checked" name="remember" /> Zapamti
            me
          </label>-->
        </div>

        <!-- ---------------------------------------------------------------- zatvori ---------------------------------------------------------------------->
        <div class="container">
          <button
            type="button"
            onclick="document.getElementById('id03').style.display='none'"
            class="cancelbtn"
          >
            Zatvori
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/css/allprograms";
</style>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase.js";

export default {
  name: "Programs",
  data() {
    return {
      Email: "",
      Password: "",
      odabir: "STANDARDNI PROGRAM ZA CIJELO TIJELO",
      telefon: "",
    };
  },
  methods: {
    begin() {
      signInWithEmailAndPassword(auth, this.Email, this.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.saveData();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.code == "auth/user-not-found") {
            console.log("User does not exist! Creating new user...");
            this.signup();
          } else {
            alert("Krivi email ili lozinka!");
          }
        });
    },
    signup() {
      createUserWithEmailAndPassword(auth, this.Email, this.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User created!");
          this.saveData();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
    async saveData() {
      // Add a new document in collection "cities"
      await setDoc(doc(db, "VJEZBE", this.Email), {
        telefon: this.telefon,
        vjezba: this.odabir,
      });
      console.log("Data saved.");
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("User logged out");
          alert("Uspješno ste prijavili vježbu!");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>
