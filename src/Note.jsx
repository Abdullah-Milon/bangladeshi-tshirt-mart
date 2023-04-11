/*          1
যদি এই project-এর ভিতরে কিছু পরিবর্তন করি বা করতে চাই যেমন Buy now
 button -এ click করলে order Summary তে quantity, price ইত্যাদি দেখাবে তাহলে 
একটা state এর প্রয়োজন যেটা শর্ত অনুসারে পরিবর্তন  হবে,
যাই হোক  এখন এই state টা কোথায় হবে সেটাও চিন্তার বিষয়, 
state TShirt.jsx-এ declare করা যাবে না,কারণ এটা sharedAble component না 
তাই sharedAble component হিসেবে Home.jsx এর মধ্যে state কে declare করতে হবে 
 */

/*      2
setCart আমরা তখনই set করব যখন কেউ একজন t-shirt এর ভেতর 
Buy now বাটনে ক্লিক করবে 
*/

/*  3
একটা জিনিস যদি simple array হয় তাহলে আপনি push করে দিব কিন্তু সেটা 
যদি state-এর অন্তর্ভুক্ত হয়ে যায়,তাহলে সেখানে push করা যাবে না, কারণ সেটা immutable
সেজন্য আবার নতুন করে একটা array নিতে হবে তারপরে আমরা push করতে পারব 

array নেওয়ার পরে আমরা cart কম্পনেন্টে cart টাকে props আকারে পাঠিয়ে দিতে পারি

*/