<?php
  require "modules/head.php"
?>
<main class="main-container">
  <h1 class="title">Registration</h1>
  <div class="reg-window">
    <form action="check.php" method="post">
      <div class="form-container">
        <ul class="fields">
          <li class="fields__component">
            <label for="name">Enter your name</label>
          </li>
          <li class="fields__component">
            <input class="input" type="text" placeholder="Vanya" id="name" name="name" required>
          </li>
        </ul>

        <ul class="fields">
          <li class="fields__component">
            <label for="login">Enter login</label>
          </li>
          <li class="fields__component">
            <input class="input" type="text" placeholder="vanya1993" id="login" name="login" required>
          </li>
        </ul>

        <ul class="fields">
          <li class="fields__component">
            <label for="password">Enter password</label>
          </li>
          <li class="fields__component">
            <input class="input" type="password" placeholder="1234" id="password" name="password" required>
          </li>
        </ul>
      </div>
      <button type="submit" class="submit-btn">Register</button>
    </form>

    <p class="log-offer">
      If you already have an account you can
      <a href="login.php" class="log-offer__link">log in</a>
    </p>
  </div>
</main>
<?php
  require "modules/footer.php"
?>