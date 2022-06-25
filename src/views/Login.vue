<template>
  <div class="gumb-content">
    <h2>Prijavi se!</h2>

    <!-- ------------------------------------------------------ Raspored ---------------------------------------------------------------->

    <table>
      <tr>
        <th>Treninzi</th>
        <th>Ponedjeljak</th>
        <th>Utorak</th>
        <th>Srijeda</th>
        <th>Četvrtak</th>
        <th>Petak</th>
        <th>Subota</th>
      </tr>

      <tr>
        <td>Cikularni</td>
        <td>19:00</td>
        <td>19:00</td>
        <td>/</td>
        <td>19:00</td>
        <td>19:00</td>
        <td>19:00</td>
      </tr>

      <tr>
        <td>Standardni</td>
        <td>17:00</td>
        <td>17:00</td>
        <td>/</td>
        <td>17:00</td>
        <td>17:00</td>
        <td>/</td>
      </tr>

      <tr>
        <td>Gluteus</td>
        <td>12:00</td>
        <td>/</td>
        <td>12:00</td>
        <td>/</td>
        <td>12:00</td>
        <td>/</td>
      </tr>
    </table>

    <!-- ---------------------------------------------------------- LOGIN FORM ---------------------------------------------------------------->

    <button
      onclick="document.getElementById('id01').style.display='block'"
      style="width: auto"
    >
      Prijava
    </button>

    <div id="id01" class="modal">
      <form
        class="modal-content animate"
        action="/action_page.php"
        method="post"
      >
        <!-- ---------------------------------------------------------- close modal (x) ---------------------------------------------------------------->
        <div class="imgcontainer">
          <span
            onclick="document.getElementById('id01').style.display='none'"
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

   
        </div>

        <!-- ---------------------------------------------------------------- zatvori ---------------------------------------------------------------------->
        <div class="container">
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
            class="cancelbtn"
          >
            Zatvori
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, auth, db } from "@/firebase.js";

export default {
  name: "Login",
  data() {
    return {
      Email: "",
      Password: "",
      odabir: "",
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
