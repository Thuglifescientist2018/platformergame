<h1>Platformer Game  </h1>
<h4>Made with HTML5, CSS3 and Javascript </h4>

<h5>Folder/File Structure </h5>
<ul id="folderstructure">
    <li class="folder">CSS
    <ul class="subfolder">
        <li class="file"> style.css</li>
        <li class="file"> style.css.map</li>
        <li class="file> style.scss</li>
    </ul>
    </li>
    <li class="folder">
        images > transparent_assets
         <ul class="subfolder">
        <li class="file"> boyhair.png</li>
        <li class="file"> giphy.gif</li>
    </ul>
    </li>
    <li class="folder">
        js
         <ul class="subfolder">
        <li class="file">app.js</li>
    </ul>
    </li>
    <li class="folder">
        video
         <ul class="subfolder">
        <li class="file">clouds.mp4</li>
        <li class="file">roadmove.mp4</li>
    </ul>
    </li>
        <li>index.html</li>
</ul>

<h1> app.js</h1>
<p>
    Here is what we do
</p>
<ul id="todo">
    <li>Select boy(giphy.gif) which has a boy running</li>
    <ul>
    <li>change the position to relative so that we can manipulate top bottom left right 
    property
    </li>
    </ul>
    <li>Make variable 'left' to manipulate character using <strong>Left</strong> and <strong>Right</strong> Arrow (<i>Positive number(right arrow) of left variable Pushes character to the right and negative number pushes it to the left)</i></li>
  <li>
  Make <b>document.eventListener</b> for listening to different keypresses with <i>keydown</i>
  Why keydown? Because we can move character by holding the key instead of pressing it often
  <ul>
  <li>Through our function, we also execute and change different animation from our css file. I suggest you to go into style.scss</li>
  </ul>
  </li>
</ul>

<h1> Style.scss</h1>
<p> If you have vscode(text editor) install "<b> Live Sass Compiler </b>" to reflect the modifications that you made to style.css (plain css file)</p>
<p>
<br>
<li>
* {
    margin: 0;
    padding: 0;
} for erasing default spaces
</li>
We have two items mainly inside #parent
<ul>
    <li> One for displaying the cloud</li>
    <li> One for displaying ground or road where character runs</li>
</ul>
</p>
