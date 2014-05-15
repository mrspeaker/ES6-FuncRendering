# ES6: Hey look, JS is good now!. ES6 gettin good. JavaScript gets serious: ES6 and beyond.

>> If you weren't paying close attention you may have missed JavaScript morphing into a really good language. Shedding warts from its "Lisp in C's Clothing" past, the latest updates bring a stack of functional features that make coding in Plain ol' JavaScript plain good fun. Earle will cover what's here, what's just around the corner, and argue that it may be time to put your transpiler out to pasture.


## Intro
Basically there are two types of groups of JavaScript dis-likers: those who think JavaScript is a poor man's Java, and those who think that JavaScript is a poor man's lisp. Or to put it another way: Some people make fun of javascript for *stupid reasons*, and some make fun of javascript for *reasonable* reasons.

			JS < Java        wats      JS < Lisp
			unreasoable				   reasonable

The core of the problem is the superficial rough spots (the stupid reasons to hate js) are plainly visible, and the powerful functional aspects are clunky to use - leading to reasonable reasons to hate js. The next version of Javascript (that is, the ECMAScript 6 specifctation, or ES6 from now on) addresses many of the reasonable reasons quite well, adn even some of the stupid reasons, albiet in a way that ain't going to change java people's opinions. ... removing some fo the warts and sculpting the rough... into something resembling a very nice programming language.

In the next 30 minutes I'm going to do the following things:
 * This intro (2 mins)
 * Rant about transpilers (3 mins)
 * Seque seemlessly into functional rendering (5 mins)
 * Live code it in ES6 (15 mins)
 * Re-state my rant about transiplers (3 mins), and probably make fun of java again.

 with 2 mins for technical difficulties. I'm not going to go into detail about every aspect of recent addtionls & es6 - I don't know every aspect, for one thing, and there's a lot in there: Promises, generators, object and array destructuring, text interpolation, proxies, modules, classes... A bunch of stuff that you probably already know. I just want to how you a "real" peice of code and how it benefits from the updates.

## The rise of the transpiler

"Ain't no party like a JavaScript party, 'cause a JavaScript party IS MANDATORY".

For the longest time, JavaScript was the only option - fueling the.... - But then, came the transpiler: the primary weapon for teh Javascript opponent. The first transpilers emerged to address some of the *reasonable* reasons to not use plain old javascript. Coffeescript was extremely successful in highlighting that javascript could easily be made more expressive and consise. It opened the door to some cool additions to the ECMAScript 6 specification that have just now started trickling into the browsers.

"transpiling: compiling to similar level of abstraction."

But the transpiler had proven itself to be a powerful beast: a power that could be used for good, or evil.

Dart.
	- hey, super fexible, can implement all your langs: not aon that... just works. no build step required.
	- fruity loops file => rendered wav
	- transpiled project => exported javascript

	- All the conveniece of compiling stuff, with all the efficiency and elegance of a machine-generated scripting language!
	- Compare to coffeescript. Typescript. etc.

## Just fix js

The idea of web standards and the open web.

### es6 themes

- Harmony goals & themes: http://wiki.ecmascript.org/doku.php?id=harmony:harmony
- Why it's important - more than syntactic sugar. more consise and expressive
- History: what's been in the recent versions, how it compares to this one (before they were small, mostly boring updates. 'cept for map/reduce/etc)

## functional rendering

- intro: will do functors and monads made from lamdas. just kidding...

About 8 years ago now I got a tumour on my auditory nerve and had to have it removed via some brain surgery. Although this was scary, and not something I'd recommend people to do, it did mean that I got 6 weeks off work during which I was not allowed to do anything, except play on the computer.

I decided to use this time wisely and learn how to make a computer game. For the long-dead Atari 2600 console. Using 6502 assembler.

The atari 2600 machine only had 128 bytes of RAM and cartridges could only store 4k of data - so the rendering couldn't possibly be done via a screen buffer - it worked was via a technique called "Racing the Beam". clock cycles === screen space.

- opengl

Once memory got cheaper and CPUs faster, imperitve methods of drawing became the norm: screens images were buffered up and displayed at once, you could ... then we got graphics card with gpus that are good at crunching numbers really fast... so fast that to get the cool effects you can write programs that run for every pixel, every frame. These are called fragment shaders.

[glsl.heroku.com]

Quite funcitonal in nature (though uses a lot of mutable state): take a pixel, apply a funciton to it, get a new pixel back. To get something on screen, you need to return back to the atari 2600 mindset - not thinking about the whole screen, but about functions.

[live code a bit of shader]

###  live coding
- coding a shader

-- in attempt to combine shaders, the atari 2600, and ES6 together I'm going to code up a... for the lowrez jam: 32 x 32 pixels, must be aligned to the grid (no "half pixels").

start with an es5 project that fills in the 32x32 pixel grid, using putpixel

First we'll move our base project to use modules.
- can be specid




### and also..

- Integrating with workflow (grunt/gulp/traceur) todo: test out grunt integration. Polyfilling/shims

- other features.
	: Promises
	: Proxies

- future: ES7: http://wiki.ecmascript.org/doku.php?id=strawman:strawman
http://esdiscuss.org
https://github.com/tc39/ecma262 // es7

## timelines

   - remember ie5.5?
   Timelines for completion: Who's responsible. what's the deadline?

## summary
js is good now.
