// Part 1
// 題目：The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// 先將每列文字依照畫面斷行塞入換行符號\n字串陣列中
// 取出每列字串中第一位數字和最後一位數字，如果字串中只有一個數字，則組合成相同數字的兩位數
// 將每列取出的字串組合成一組兩位數的數字
// 再將每列數字相加
import { day1Topic } from './topic/day1Topic.js';
const rawTopic = day1Topic;
let day1 = document.querySelector('#day1');

/**
 * 取出每列字串中第一位數字和最後一位數字，如果字串中只有一個數字，則組合成相同數字的兩位數
 */
function arrange() {
  const array = [];
  let topic = rawTopic.split('\n');
  topic = findLetters(topic);
  for (let index = 0; index < topic.length; index++) {
    let element = topic[index];
    element = element.replace(/[^0-9]/gi, '');
    const first = element.slice(0, 1);
    const last = element.slice(-1);
    // 將每列取出的字串組合成一組兩位數的數字
    const twoDigitNumber = Number(first.concat(last));
    array.push(twoDigitNumber);
  }
  return SumArray(array);
}
/**
 *  將每列數字相加
 * @param {*} arr
 * @returns
 */
function SumArray(arr) {
  // console.log('arr', arr);
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  console.log(sum);
  return sum;
}
day1.innerHTML = arrange();

// Part 2
// Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

/**
 * 將英文字母的數字文字轉成數字
 * @param {*} topic
 * @returns
 */
function findLetters(topic) {
  const compare = {
    // twone: '21',
    // eightwo:'82',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  for (let index = 0; index < topic.length; index++) {
    // 陷阱 twone,eightwo
    let letter = topic[index].replace('twone', 'twoone').replace('eightwo','eighttwo');
    letter = Object.keys(compare).reduce(function (prev, key) {
      prev = prev.replace(key, compare[key]);
      // console.log(prev);
      return prev;
    }, letter);
    topic[index] = letter;
  }
  // console.log(topic);
  return topic;
}
