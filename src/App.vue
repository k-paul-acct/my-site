<script setup lang="ts">
import githubIcon from './assets/github.svg'

import CodeBackdrop from './components/CodeBackdrop.vue'

const year = new Date().getFullYear()
</script>

<template>
  <div id="container">
    <CodeBackdrop />

    <header>
      <a href="./" class="logo">Pavel Kulakov</a>
      <span class="color-light-accent">Software developer</span>
    </header>

    <main>
      <div class="hero">Hi!</div>
      <div>
        <h1>I'm Pavel Kulakov</h1>
        <p class="subtitle">Pleased to meet you on this page!</p>
      </div>
      <div class="main-desc">
        <p>
          I love software development and so into complex tasks, math and algorithms. Mainly I write back-end apps
          using <code>C#</code> and <code>.NET Core</code>. In my projects I work on architecture design and deployment process.
          I have a pretty knowledge of networking, DBMS and software-hardware interaction.
        </p>
        <p>
          My stack and the technologies used is <code>.NET</code>, <code>PostgreSQL</code>, <code>Docker</code>,
          <code>NGINX</code>, <code>Kibana</code> with <code>ElasticSearch</code> and <code>Git</code>.
        </p>
        <p>
          And here you can check out some information about me.
        </p>
      </div>

      <section class="main-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <ul class="contact" role="list">
          <li class="contact-entry">
            <span aria-hidden="true">@</span>
            <a href="mailto:k.paul.acc@yandex.ru">k.paul.acc@yandex.ru</a>
          </li>
          <li class="contact-entry">
            <img :src="githubIcon" width="32" height="32" alt="" />
            <a href="https://github.com/k-paul-acct" aria-label="k-paul-acct on GitHub">k-paul-acct</a>
          </li>
        </ul>
      </section>
      <section class="main-section" aria-labelledby="resume-title">
        <h2 id="resume-title">Résumé</h2>
        <p class="main-desc resume-desc">
          Feel free to contact me to find out more information about me or what you are interested in or wondering
          about. Also, I'm always glad if you just wish me a good day!
        </p>
        <a class="resume-link" href="https://t.me/k_pave1">Ask in Telegram <span aria-hidden="true">›</span></a>
      </section>
    </main>

    <footer>
      <div class="footer-left">
        <div class="logo">Pavel Kulakov</div>
        <div class="color-light-accent">{{ year }}</div>
      </div>
      <a class="color-light-accent" href="https://github.com/k-paul-acct/my-site">
        View sources on GitHub
      </a>
    </footer>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  overflow: clip;
  isolation: isolate;
  position: relative;
}

.hero {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 0px 20px;
  margin: 10px 20px;
  border-radius: 20px;
  background: #F0F0F0;
  color: #1E1E1E;
  font-size: 96px;
}

.main-desc {
  max-width: 100%;
  margin-bottom: 48px;
}

.main-section {
  margin-bottom: 64px;
}

.main-section h2 {
  margin-bottom: 32px;
}

.contact {
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 4rem;
  row-gap: 2rem;
}

.contact-entry {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: clamp(1.125rem, 4vw, 1.5rem);
}

.contact-entry img {
  flex: none;
  object-fit: contain;
}

.contact-entry a {
  overflow-wrap: anywhere;
}

.main-desc.resume-desc {
  margin-bottom: 32px;
}

.resume-link {
  display: inline-block;
  border: 2px solid currentColor;
  border-radius: 16px;
  font-size: 1.5rem;
  padding: 16px;
}

@media (min-width: 400px) {
  .hero {
    padding: 0px 20px;
    margin: 16px 20px;
    border-radius: 28px;
    font-size: 128px;
  }

  .main-desc {
    max-width: 100%;
    margin-bottom: 48px;
  }
}

@media (min-width: 500px) {
  .hero {
    padding: 0px 24px;
    margin: 16px 24px;
    border-radius: 32px;
    font-size: 140px;
  }

  .main-desc {
    max-width: 85%;
    margin-bottom: 48px;
  }
}

@media (min-width: 750px) {
  .hero {
    padding: 0px 32px;
    margin: 16px 32px;
    border-radius: 38px;
    font-size: 172px;
  }

  .main-desc {
    max-width: 75%;
    margin-bottom: 48px;
  }
}

@media (min-width: 1000px) {
  .hero {
    padding: 0px 40px;
    margin: 20px 40px;
    border-radius: 40px;
    font-size: 200px;
  }

  .main-desc {
    max-width: 66%;
    margin-bottom: 64px;
  }
}
</style>
