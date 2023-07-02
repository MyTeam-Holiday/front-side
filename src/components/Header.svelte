<script>
  import { onDestroy } from 'svelte';
  import { User } from '../stores/userStore';
  import { Logout } from '../services/authenticationService';

  import NavMenu from './NavMenu.svelte';
  import ModalWindow from './ModalWindow.svelte';
  import LoginForm from './LoginForm.svelte';

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
