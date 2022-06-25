<template>
  <div class="containter">
    <div class="trening">
      <h1>GLUTEUS PROGRAM</h1>
      <h3>(kod kuće)</h3>
      <p>• cilj: mišićni rast i oblikovanje mišića nogu i gluteusa</p>
      <p>
        • 3 treninga tjedno specijalizirana isključivo za noge i gluteus
        vježbajući kod kuće
      </p>
      <p>
        • poželjni dodatni rekviziti u teretani: fit band (ili neka druga
        elastična traka)
      </p>
      <p>
        • video svake vježbe pojedinačno (Kristijan i Lea demonstriraju) sa
        objašnjenjem pravilnog izvođenja
      </p>
      <p>• dodatni savjeti oko treninga, ali i prehrane</p>
      <p>• program je potrebno raditi minimalno 8 tjedana</p>
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

