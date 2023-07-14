<!-- <script>
    import { _ } from '../../services/i18n';
</script>

<header class="hero">
    <div class="hero-body">
        <div class="contiainer">
            <h1 class="title">{$_('app.title')}</h1>

            <h2 class="subtitle">{$_('app.subtitle')}</h2>
        </div>
    </div>
</header> -->
<script>
  import { _ } from '../../services/i18n';
  import { Link } from "svelte-routing";
  import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
  import { onDestroy } from 'svelte';
  import { User } from '../../stores/userStore';
  import { Logout } from '../../services/authenticationService';

  import NavMenu from 'navMenu.svelte';
  import ModalWindow from '../pages/modalWindow.svelte';
  import LoginForm from '../pages/loginForm.svelte';

  let showModal = false;

  let isAuth;
  let login;

  const unsubAuth = User.subscribe((user) => {
    isAuth = user.isAuthenticated;
    login = user.login;
  });

  onDestroy(() => {
    unsubAuth();
  });

  //$: isLoggedIn = !!isAuth;
</script>

<header>
  <div class="header-container">
    <NavMenu />
    <div class="user-container">
      {#if !!isAuth}
        <div class="">
          {login}
        </div>
      {:else}
        <button class="btn btn-primary" on:click={() => (showModal = true)}
          >Login</button
        >

        <ModalWindow bind:showModal modalTitle="Login form">
          <LoginForm />
        </ModalWindow>
      {/if}
    </div>
  </div>
</header>

<style>
  header {
    background-color: white;
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .user-container {
    margin-top: auto;
    margin-bottom: auto;
  }
</style>
