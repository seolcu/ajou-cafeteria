<script>
  import "./styles.css";
</script>

<div class="app">
  <main>
    <slot />
  </main>

  <footer>
    <p>
      visit <a href="https://github.com/seolcu/ajou-cafeteria">Github repo</a>
    </p>
    <select>
      <option>한국어(KR)</option>
      <option>English(US)</option>
    </select>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
  }

  main {
    padding: 10px;
  }

  footer {
    text-align: center;
    padding: 10px;
  }
</style>
