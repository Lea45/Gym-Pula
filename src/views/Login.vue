<template>
  <div class="gumb-content">
    <h2>Prijavi se!</h2>

<!-- ------------------------------------------------------ Raspored ---------------------------------------------------------------->

<table >
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
            <td> Cikularni </td>
            <td> 19:00 </td>
            <td> 19:00 </td>
            <td> / </td>
            <td> 19:00  </td>
            <td> 19:00  </td>
            <td> 19:00  </td>
        </tr>
        
        <tr>
            <td> Standardni </td>
            <td> 17:00 </td>
            <td> 17:00 </td>
            <td> / </td>
            <td> 17:00 </td>
            <td> 17:00 </td>
            <td> / </td>
        </tr>

        <tr>
            <td> Cijelo tijelo </td>
            <td> / </td>
            <td> 09:00 </td>
            <td> 09:00 </td>
            <td> / </td>
            <td> 09:00 </td>
            <td> 09:00 </td>
        </tr>

        <tr>
            <td> Gluteus </td>
            <td> 12:00 </td>
            <td>  / </td>
            <td> 12:00 </td>
            <td> / </td>
            <td> 12:00 </td>
            <td> / </td>
      </tr>
    </table>


    <!-- ---------------------------------------------------------- LOGIN FORM ---------------------------------------------------------------->

    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Prijava</button>

    <div id="id01" class="modal">
  
      <form class="modal-content animate" action="/action_page.php" method="post">


    <!-- ---------------------------------------------------------- close modal (x) ---------------------------------------------------------------->
        <div class="imgcontainer"> 
         <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
          <img src="images/dumbell.jpg" alt="dumbell" class="dumbell">
        </div>



    <!-- ------------------------------------------------------- korisničko ime / e-mail ---------------------------------------------------------------->
        <div class="container">
          <label for="uname"><b>Kor.ime</b></label>
          <input type="text" placeholder="Unesi e-mail ili korisničko ime.." name="uname" required> <br>



      <!-- ---------------------------------------------------------------- lozinka ---------------------------------------------------------------------->
          <label for="psw"><b>Lozinka</b></label>
          <input type="password" placeholder="Unesi lozinku..." name="psw" required> <br>



      <!-- ---------------------------------------------------------------- prijava ---------------------------------------------------------------------->
          <button type="submit">Prijava</button> <br> <br>

        

      <!-- ---------------------------------------------------------------- zapamti me ---------------------------------------------------------------------->
          <label>
            <input type="checkbox" checked="checked" name="remember"> Zapamti me
          </label>

    </div>


      <!-- ---------------------------------------------------------------- zatvori ---------------------------------------------------------------------->
    <div class="container">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Zatvori</button>
    </div>

  </form>

    </div>
</div>

</template>
