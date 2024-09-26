<template>
  <div class="py-10 rounded shadow-md bg-secondary">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2 class="flex justify-center text-3xl font-extrabold text-primary">About us</h2>
      <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div class="p-6 rounded-lg shadow bg-primary">
          <h3 class="text-lg font-medium">About our team</h3>
          <p class="mt-2 text-base text-justify text-secondary">
            We are a team of web developers made up of 2 people, Favio Henrique
            Dos Santos and Iván Pérez Talavera, both students of Web Application
            Development in Tenerife, Spain.
          </p>
          <br />
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between p-2 rounded shadow-md">
              <p>Iván Pérez Talavera</p>
              <div class="flex items-center gap-2">
                <a href="https://github.com/Vanrias" target="_blank" class="text-center">
                  <img src="../assets/github.png" alt="GitHub" width="40" height="40" />
                </a>
                <a href="https://www.linkedin.com/in/iv%C3%A1n-p%C3%A9rez-talavera-54728926b" target="_blank"
                  class="text-center">
                  <img src="../assets/linkedin.png" alt="LinkedIn" width="40" height="40" />
                </a>
              </div>
            </div>
            <div class="flex items-center justify-between p-2 rounded shadow-md">
              <div>
                <p>Favio Henrique</p>
                <p>Dos Santos Rodríguez</p>
              </div>
              <div class="flex items-center gap-2">
                <a href="https://github.com/favio2santos" target="_blank" class="text-center">
                  <img src="../assets/github.png" alt="GitHub" width="40" height="40" />
                </a>
                <a href="https://www.linkedin.com/in/faviodossantos/" target="_blank" class="text-center">
                  <img src="../assets/linkedin.png" alt="LinkedIn" width="40" height="40" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 rounded-lg shadow bg-primary">
          <h3 class="text-lg font-medium">About this proyect</h3>
          <p class="mt-2 text-base text-justify text-secondary">
            This project is the final work of degree from our team of web
            developers. The idea was born from the inspiration of games like
            Gamedle, Loldle, Wordle, etc. We decided to make a "dle" model with
            easy scalability, also since we love the souls saga, we decided to
            release the first model with the final bosses of some Souls games.
          </p>
          <br>
          <p class="mt-2 text-base text-center text-secondary">We hope you enjoy our project!!</p>
        </div>
        <div class="p-6 rounded-lg shadow bg-primary">
          <h3 class="text-lg font-medium">Next patch promises!</h3>
          <ul class="mt-2 text-base list-inside text-secondary">
            <li class="pl-4 list-disc">Performance improvement.</li>
            <li class="pl-4 list-disc">Responsive design.</li>
            <li class="pl-4 list-disc">New auth method.</li>
            <li class="pl-4 list-disc">Premium mode.</li>
            <li class="pl-4 list-disc">Implemet ads.</li>
            <li class="pl-4 list-disc">New add friends method.</li>
            <li class="pl-4 list-disc">Improve daily score view.</li>
            <li class="pl-4 list-disc">More languages.</li>
            <br>
            <li class="pl-4 list-disc">MORE BOSSES!!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
