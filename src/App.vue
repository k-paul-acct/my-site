<script setup lang="ts">
</script>

<template>
  <div id="container">
    <div id="code-block">
      <highlightjs language="csharp" code="using System.Text;
using NonCrypto;

namespace DataStructures;

public class BloomFilter
{
    private const double Ln2 = 0.693147180559945309417232;
    private readonly BitArray _bitArray;
    private readonly Func<uint, uint, long>[] _hashFunctions;
    private readonly int _maxSize;
    private readonly int _seed;

    public BloomFilter(int maxSize) : this(maxSize, Random.Shared.Next())
    {
    }

    public BloomFilter(int maxSize, double maxError) : this(maxSize, Random.Shared.Next(), maxError)
    {
    }

    public BloomFilter(int maxSize, int seed, double maxError = 0.01)
    {
        static IEnumerable<Func<uint, uint, long>> InitHashFunctions(int hashFunctionsNum, long bitsNum)
        {
            return Enumerable
                .Range(0, hashFunctionsNum)
                .Select<int, Func<uint, uint, long>>(i => (h1, h2) => (h1 + i * h2 + i * i) % bitsNum);
        }

        _maxSize = maxSize;
        _seed = seed;
        var bitsNum = (long)Math.Ceiling(-maxSize * Math.Log(maxError) / Ln2 / Ln2);
        var hashFunctionsNum = (int)Math.Ceiling(Ln2 * bitsNum / maxSize);
        _bitArray = new BitArray((ulong)bitsNum);
        _hashFunctions = InitHashFunctions(hashFunctionsNum, _bitArray.Length).ToArray();
    }

    public int Count { get; private set; }
    public bool Full => Count >= _maxSize;

    private IEnumerable<long> GetIndicesByKey(string key)
    {
        var bytes = Encoding.Default.GetBytes(key);
        var h1 = Hash.MurmurHash3_X86_32(bytes, _seed);
        var h2 = Hash.Fnv1_32(bytes);
        return _hashFunctions.Select(x => x(h1, h2));
    }

    public bool Contains(string key)
    {
        return GetIndicesByKey(key).All(i => _bitArray[i]);
    }

    public void Insert(string key)
    {
        var indices = GetIndicesByKey(key).ToArray();
        if (indices.All(i => _bitArray[i])) return;
        foreach (var index in indices) _bitArray[index] = true;
        Count += 1;
    }
}" />
    </div>

    <nav>
      <div class="nav-left">
        <a href="/" class="logo noa">Pavel Kulakov</a>
        <div class="color-light-accent">Software developer</div>
      </div>
      <div class="nav-right">
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
            <div><a href="mailto:k.paul.acc@yandex.ru" target="_blank">k.paul.acc@yandex.ru</a></div>
          </div>
          <div class="contact-entry">
            <img src="../public/GitHub_logo.svg" alt="" />
            <div><a href="https://github.com/k-paul-acct" target="_blank">k-pavel-acct</a></div>
          </div>
          <div class="contact-entry">
            <img src="../public/LinkedIn_logo.svg" alt="" />
            <div><a href="https://www.linkedin.com/in/k-pavel" target="_blank">k-pavel</a></div>
          </div>
        </div>
      </div>
      <div class="main-section">
        <h1>Résumé</h1>
        <p class="main-desc" style="margin-bottom: 32px;">
          Feel free to contact me to find out more information about me or what you are interested in or wondering
          about. Also, I'm always glad if you just wish me a good day!
        </p>
        <div class="resume">
          <button><a href="https://t.me/k_pave1" target="_blank">Ask in Telegram ></a></button>
        </div>
      </div>
    </main>

    <footer>
      <div class="footer-left">
        <div class="logo">Pavel Kulakov</div>
        <div class="color-light-accent">{{ new Date().getFullYear() }}</div>
      </div>
      <a class="color-light-accent" href="https://github.com/k-paul-acct/my-site" target="_blank">
        View sources on GitHub
      </a>
    </footer>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

#code-block {
  z-index: -20;
  position: absolute;
  left: 0;
  opacity: 10%;
  font-size: 18px;
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

.main-section h1 {
  margin-bottom: 32px;
}

.contact {
  display: flex;
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
  font-size: 24px;
}

.contact-entry img {
  height: 32px;
}

.resume {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  column-gap: 4rem;
  row-gap: 2rem;
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

  #code-block {
    left: 5%;
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

  #code-block {
    left: 10%;
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

  #code-block {
    left: 25%;
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

  #code-block {
    left: 33%;
  }
}
</style>