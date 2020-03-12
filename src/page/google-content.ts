import {init} from './content';
import {DMessage} from '../dmessage';
import stringify from '../stringify';

if (/tbs\=sbi|tbm\=isch|tbs=imgo/.test(location.search)) {
  async function main() {
    const onClick = await init({
      getAllItems() {
        return Array.from(document.getElementsByClassName('rc')) as HTMLElement[];
      },
      stringify(e) {
        const s = e.querySelector('cite').textContent;
        return new DMessage(s.replace(/^\s*https?:\/\//i, '').split('/', 1)[0], e.querySelector('h3').textContent);
      },
      getHlNodes() {
        return document.querySelectorAll('h3,.g .st');
      }
    });
    $('#rso').on('mouseup', '.r', function (e) {
      if (e.which <= 2) {
        onClick((<Element>this).closest('.rc'));
      }
    });
  }

  main().catch(e => {
    console.error(e);
    alert(stringify(e))
  });
}
