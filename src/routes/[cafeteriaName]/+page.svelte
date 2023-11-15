<script>
  import { page } from "$app/stores";
  let cafeteriaName = $page.params.cafeteriaName;
</script>

<section>
  <h1>{cafeteriaName}</h1>
  <img src={cafeteriaName + ".jpg"} alt={cafeteriaName} />
</section>

<style>
  img {
    width: 100%;
    border-radius: 10px;
  }
</style>
