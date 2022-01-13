
import { debounce, throttle} from 'debounce-add-throttle';
window.addEventListener('scroll', debounce(function(event){
      console.log(this, event);
}, 200));
const button = document.getElementsByTagName('button')[0]
      button.addEventListener('click', throttle(function(event) {
console.log(this, event);
}, 1000, 1));