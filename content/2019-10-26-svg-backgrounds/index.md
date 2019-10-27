---
title: Let’s add a fancy SVG background
date: 2019-10-27
tags: [javascript, react, sass, svg, beginner]
path: blog/fancy-background
cover: ./preview.png
excerpt: Learn how to find & use gorgeous SVG's in the background of all your future projects
---

##Lame Backgrounds are Lame!
Let’s face it, plain ol’ mono-colored backgrounds are lame. Nothing groundbreaking about that. If you’ve seen my blog page at <a href="https://chancethehacker.com" rel="nofollow noopener noreferrer" target="_blank">Chance The Hacker</a> you probably wondered how I got that awesome looking background on there. So today I’m going to teach you how, and it’s going to be wayyyy easier than you think it is. Seriously, super easy.

##Repo Link
So I went ahead and took the liberty of setting up a nice GitHub repo with React and Sass for the project. It's located here <a href="https://github.com/WCPeragine/adding-svg-tut" rel="nofollow noopener noreferrer" target="_blank">Fancy GitHub Repo</a>.

`Please be aware that I have included Sass files instead of Css. The reason for that is fairly simple, Sass is super easy because it’s hardly any different than Css. However, once you become an advanced user, it opens a whole new world. When I started, I was a bit scared to ever leave my precious Css world, and it took me ages to get into Sass. Welp, let’s just see how deep this sassy little rabbit hole goes.`

##Cloning the repo
First we need to clone the Github repo. Open up your terminal of choice, and navigate to the folder you want to place your new project into. The following command will create a new folder for you, so do not create the folder yourself, or you will end up with double folders.

```shell
git clone https://github.com/WCPeragine/adding-svg-tut.git adding-svg-tut
```

Or if you use SSH (and you SHOULD)

```shell
git clone git@github.com:WCPeragine/adding-svg-tut.git adding-svg-tut
```

`If you don’t know how to set up SSH and want a tutorial on it, let me know down in the comments and I’ll make it happen.`

Now cd (change directory) into the folder we just created

```shell
cd adding-svg-tut
```

Now we need to install all dependencies

```shell
yarn install
```

If you use vs code, you can open the whole project up easily with this command, other wise open the project your normal way (`in the terminal, the . translates to select everything`)

```shell
code .
```

And let’s start it up so we can see what it looks like

```shell
yarn start
```

So now as you can clearly see, Peppy Donuts is having a marketing meltdown. Their background is as bland as an unglazed donut. Who in their right mind would ever want to buy a Peppy brand vitamin enhanced donut when it’s laid over such a bland background? Not me, I can assure you of that. Let’s help Peppy out, after all, we want our children to grow up healthy and strong don’t we?

##Getting the SVG Pattern
The site we’re going to be using today is called <a href="https://www.heropatterns.com/" rel="nofollow noopener noreferrer" target="_blank">Hero Patterns</a>. The absolutely wonderful people at <a href="https://www.heropatterns.com/" rel="nofollow noopener noreferrer" target="_blank">Hero Patterns</a> have built a site specifically for web developers. They provide completely free, highly customizable patterns! So let’s navigate over there and grab one. So pop open a new tab by clicking here =><a href="https://www.heropatterns.com/" rel="nofollow noopener noreferrer" target="_blank">Hero Patterns</a>

Once you’ve navigated to the site, you will see a colored rectangle called `foreground color`. Click it, and let’s fill it in with the yellow color from our variables.scss file. (`#fff9c4`) Now let’s change the background color to match our red variable. (`#ff5252`) Now feel free to change the opacity to whatever you see fit. I prefer to just leave it as is.

Great, now scroll through all the SVG’s and find one you like. The two I liked for this project were called `Stripes` or `Rounded Plus Connected`, but you may select whichever you like. Try to keep in mind the aesthetics of the overall project when choosing your svg. Our Peppy Donuts ad has a very retro style about it, so we don’t want to choose anything too modern.

Once you’ve found the SVG you like, click it, and the scss(sass) you need will popup and be inside the box. There will be two properties, for this example, all we need is the background-image property, as inside our sass sheet I’ve already set the background color to red. Copy everything after the `background-image:`

Now mosey on over to our project files, and open up the file `src/App.scss`. You should see something like this

```scss
//These variables will change the background
$backgroundColor: $white;
$backgroundImg: none;
//Alter the variables above!
```

Highlight the `none;` (don’t forget the semicolon or you will have 2) and paste your URL in. It should now look something like this.

```scss
//These variables will change the background
$backgroundColor: $white;
$backgroundImg: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff9c4' fill-opacity='0.4'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23zM59.05 83H43V66.95c5.054-.5 9-4.764 9-9.948V52h5.002c5.18 0 9.446-3.947 9.95-9H83v16.05c-5.054.5-9 4.764-9 9.948V74h-5.002c-5.18 0-9.446 3.947-9.95 9zm-34.1 0H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184 0-9.447-3.946-9.95-9H1v16.05c5.053.502 9 4.768 9 9.948V74h5.002c5.184 0 9.447 3.946 9.95 9zm0-82H41v16.05c-5.054.5-9 4.764-9 9.948V32h-5.002c-5.18 0-9.446 3.947-9.95 9H1V24.95c5.054-.5 9-4.764 9-9.948V10h5.002c5.18 0 9.446-3.947 9.95-9zm34.1 0H43v16.05c5.053.502 9 4.768 9 9.948V32h5.002c5.184 0 9.447 3.946 9.95 9H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184 0-9.447-3.946-9.95-9zM50 50v7.002C50 61.42 46.42 65 42 65c-4.417 0-8-3.584-8-7.998V50h-7.002C22.58 50 19 46.42 19 42c0-4.417 3.584-8 7.998-8H34v-7.002C34 22.58 37.58 19 42 19c4.417 0 8 3.584 8 7.998V34h7.002C61.42 34 65 37.58 65 42c0 4.417-3.584 8-7.998 8H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//Alter the variables above!
```

But what gives? The background is still looking plain! Well thats because we also need to set the backgroundColor variable. Let's swap that plain ol' white to red.

```scss
//These variables will change the background
$backgroundColor: $red;
```

And now go check out Peppy Donut’s ad! Holy glaze, they’re sure to move a billion units now, look at that style!

##Conclusion

That’s literally all there is to it. I have quite a lot of colors included in the `src/sass/variables.scss` file if you’re so inclined. They should all fit in quite nicely, go check them out and try replacing the backgroundColor variable with some other color variables, like this.

```scss
//These variables will change the background
$backgroundColor: $blue;
```

Or even try swapping in different patterns just to see how they look. My blog website uses a pattern from this Hero Patterns, can you spot it?

##Final Challenge
Now your last test, this will be a bit harder. Let’s see if you can figure out how to alter the foreground color of your SVG without using the Hero Patterns website. You’re going to have to modify the hex code by hand, but that’s all I will tell you! Good luck, if you figure it out, post let me know down below in the comments, if you need help, shoot me a message!
