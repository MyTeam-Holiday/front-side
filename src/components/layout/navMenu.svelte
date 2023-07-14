<script>
  import { page } from '$app/stores';
</script>

<nav>
  <ul>
    <li
      class="nav-link"
      aria-current={$page.url.pathname === '/' ? 'page' : undefined}
    >
      <a class="link" href="/">My Team Holiday</a>
    </li>
  </ul>
</nav>

<style>
  .nav-link {
    color: #28a7e9;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .nav-link:hover {
    color: #5e5e5e;
  }
  .link {
    font-size: 22px;
  }
</style>
