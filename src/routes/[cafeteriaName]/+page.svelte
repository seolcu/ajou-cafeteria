<script>
  import { page } from "$app/stores";
  import CrowdedIndicator from "../CrowdedIndicator.svelte";
  import cafeteriaInfoList from "../cafeteriaInfoList";

  let cafeteriaName = $page.params.cafeteriaName;
  let cafeteriaInfo = {
    crowded: 0,
  };
  cafeteriaInfoList.forEach((i) => {
    if (cafeteriaName == i.name) {
      cafeteriaInfo = i;
    }
  });
</script>

<section>
  <h1>{cafeteriaName}: <CrowdedIndicator crowded={cafeteriaInfo.crowded} /></h1>
  <img src={cafeteriaName + ".jpg"} alt={cafeteriaName} />
</section>

<style>
  img {
    width: 100%;
    border-radius: 10px;
  }
</style>
