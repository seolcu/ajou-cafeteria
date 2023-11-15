<script>
  import ajouLogo from "$lib/images/ajou.png";
  import cafeteriaInfoList from "./cafeteriaInfoList";
</script>

<svelte:head>
  <title>아주대학교 학생식당</title>
  <meta name="description" content="아주대학교 학생식당의 정보를 보여줍니다" />
</svelte:head>

<section>
  <h1>학생식당</h1>
  <div class="grid">
    {#each cafeteriaInfoList as cafeteriaInfo}
      <a href="/{cafeteriaInfo.name}">
        <div class="grid-element">
          <picture>
            <img src={ajouLogo} alt="사진" />
          </picture>
          <p>{cafeteriaInfo.name}</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .grid-element {
    background-color: var(--color-bg-0);
    border-radius: 10px;
    text-align: center;
    padding: 10px;
  }

  a {
    color: var(--color-text);
  }

  img {
    width: 75px;
  }
</style>
