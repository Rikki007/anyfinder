<?php
  require "modules/head.php"
?>
  <main class="main-container">
  <h1 class="title">Log in</h1>
  <div class="reg-window">
    <form action="auth.php" method="post">
      <div class="form-container">
        <ul class="fields">
          <li class="fields__component">
            <label for="login">Enter your login</label>
          </li>
          <li class="fields__component">
            <input class="input" type="text" placeholder="Vanya1993" id="login" required>
          </li>
        </ul>

        <ul class="fields">
          <li class="fields__component">
            <label for="password">Enter password</label>
          </li>
          <li class="fields__component">
            <input class="input" type="password" placeholder="1234" id="password" required>
          </li>
        </ul>
      </div>
      <button type="submit" class="submit-btn">Log in</button>
    </form>

    <p class="log-offer">
      If you don't have an account you can
      <a href="register.php" class="log-offer__link">register</a>
    </p>
  </div>
</main>
<?php
  require "modules/footer.php"
?>