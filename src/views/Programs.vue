<template>
  <div>
    <div class="container programs">
      <div class="card">
        <div class="content">
          <div class="contentBx">
            <h3>
              CIRKULARNI POLUSATNI PROGRAM<br /><span>kod kuće</span><br /><span
                >300 kn</span
              >
            </h3>
          </div>
        </div>
        <ul class="sci">
          <button @click="kosarica('CIRKULARNI POLUSATNI PROGRAM')">
            DODAJ U KOSARICU
          </button>
          <li>
            <router-link to="@/../CircularH">VIDI VISE</router-link>
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="content">
          <div class="contentBx">
            <h3>
              STANDARDNI PROGRAM ZA CIJELO TIJELO<br /><span>teretana</span
              ><br /><span>350 kn</span>
            </h3>
          </div>
        </div>
        <ul class="sci">
          <button @click="kosarica('STANDARDNI PROGRAM ZA CIJELO TIJELO')">
            DODAJ U KOSARICU
          </button>
          <li>
            <a href="StandardG">VIDI VIŠE</a>
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="content">
          <div class="contentBx">
            <h3>
              GLUTEUS PROGRAM<br /><span>teretana</span><br /><span
                >250 kn</span
              >
            </h3>
          </div>
        </div>
        <ul class="sci">
          <button @click="kosarica('GLUTEUS PROGRAM')">DODAJ U KOSARICU</button>
          <li>
            <a href="GluteusG">VIDI VIŠE</a>
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="content">
          <div class="contentBx">
            <h3>
              STANDARDNI PROGRAM ZA CIJELO TIJELO<br /><span>kod kuće</span
              ><br /><span>300 kn</span>
            </h3>
          </div>
        </div>
        <ul class="sci">
          <button @click="kosarica('STANDARDNI PROGRAM ZA CIJELO TIJELO')">
            DODAJ U KOSARICU
          </button>
          <li>
            <a href="StandardH">VIDI VIŠE</a>
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="content">
          <div class="contentBx">
            <h3>
              GLUTEUS PROGRAM<br /><span>kod kuće</span><br /><span
                >200 kn</span
              >
            </h3>
          </div>
        </div>
        <ul class="sci">
          <button @click="kosarica('GLUTEUS PROGRAM')">DODAJ U KOSARICU</button>
          <li>
            <a href="GluteusH">VIDI VIŠE</a>
          </li>
        </ul>
      </div>
    </div>

    <div id="id02" class="modal">
      <form
        class="modal-content animate"
        action="/action_page.php"
        method="post"
      >
        <!-- ---------------------------------------------------------- close modal (x) ---------------------------------------------------------------->
        <div class="imgcontainer">
          <span
            onclick="document.getElementById('id02').style.display='none'"
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
            onclick="document.getElementById('id02').style.display='none'"
            class="cancelbtn"
          >
            Zatvori
          </button>
        </div>
      </form>
    </div>
  </div>
 