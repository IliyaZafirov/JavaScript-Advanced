function create(words) {

   const contentRef = document.getElementById('content');

   for (let word of words) {

      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.addEventListener('click', (event) => {
         pEl.style.display = pEl.style.display == 'none' ? 'block' : 'none';
         // console.log(event.target);
      })

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);

   }
}
