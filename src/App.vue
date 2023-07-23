<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="nav-left">
      <a href="https://k-pavel.xyz" class="logo noa">Pavel Kulakov</a>
      <div class="color-light-accent">Software developer</div>
    </div>
    <div class="nav-right">
      <div class="nav-entry nav-selected">main()</div>
      <div class="nav-entry">contact</div>
      <div class="nav-entry">résumé</div>
    </div>
  </nav>

  <main>
    <div class="hero">Hi!</div>
    <div>
      <h1>I'm Pavel Kulakov</h1>
      <h2><i class="serif">Pleased to meet you on this page!</i></h2>
    </div>
    <div class="main-desc">
      <p>
        I love software development and so into complex tasks, math and algorithms. Mainly I write back-end apps
        using <tt>C#</tt> and <tt>.NET Core</tt>. In my projects I work on architecture design and deployment process.
        I have a pretty knowledge of networking, DBMS and software-hardware interaction.
      </p>
      <p>
        My stack and the technologies used is <tt>.NET</tt>, <tt>PostgreSQL</tt>, <tt>Docker</tt>, <tt>NGINX</tt>,
        <tt>Kibana</tt> with <tt>ElasticSearch</tt> and <tt>Git</tt>.
      </p>
      <p>
        And here you can check out some information about me.
      </p>
    </div>

    <div class="main-section">
      <h1>Contact</h1>
      <div class="contact">
        <div class="contact-entry">
          <div class="sans">@</div>
          <div><a href="mailto:k.paul.acc@yandex.ru">k.paul.acc@yandex.ru</a></div>
        </div>
        <div class="contact-entry">
          <img src="GitHub_logo.svg" alt="" />
          <div><a href="">k-pavel-acct</a></div>
        </div>
        <div class="contact-entry">
          <img src="LinkedIn_logo.svg" alt="" />
          <div><a href="">k-pavel</a></div>
        </div>
      </div>
    </div>
    <div class="main-section">
      <h1>Résumé</h1>
      <div class="resume">
        <button>View in Russian ></button>
        <button>View in English ></button>
      </div>
    </div>
  </main>

  <footer>
    <div class="footer-left">
      <div class="logo">Pavel Kulakov</div>
      <div class="color-light-accent">{{ new Date().getFullYear() }}</div>
    </div>
    <a class="color-light-accent" href="">View sources on GitHub</a>
  </footer>
</template>

<style scoped>
nav {
  display: flex;
  padding: 2rem 6rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  font-size: 14px;
  background-color: #1E1E1E;
}

.logo {
  font-size: 18px;
}

.nav-left {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.nav-right {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.nav-selected {
  background: #F0F0F0;
  color: #1E1E1E;
  padding: 4px;
  border-radius: 6px;
}

.hero {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 0px 40px;
  margin: 20px 40px;
  border-radius: 40px;
  background: #F0F0F0;
  color: #1E1E1E;
  font-size: 200px;
}

.main-desc {
  max-width: 66vw;
  margin-bottom: 64px;
}

.main-section {
  margin-bottom: 64px;
}

.main-section h1 {
  margin-bottom: 32px;
}

.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.contact-entry {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
}

.contact-entry img {
  height: 32px;
}

.resume {
  display: flex;
  align-items: flex-start;
  gap: 64px;
}

button {
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border-radius: 16px;
  font-size: 24px;
  padding: 16px;
  border-width: 2px;
  border-color: #F0F0F0;
  border-style: solid;
}

footer {
  background-color: #404040;
  display: flex;
  padding: 2rem 6rem;
  justify-content: space-between;
  align-items: baseline;
  align-self: stretch;
}

.footer-left {
  display: flex;
  align-items: baseline;
  gap: 32px;
}

@media (hover: hover) {
  button:hover {
    text-decoration: underline;
  }
}
</style>