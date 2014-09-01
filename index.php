<?php include("inc/head.php"); ?>
<?php include("inc/header.php"); ?>

<body>

<main role="main" class="mainarea">
	<section class="container hero" role="region">
		<div class="container__in">
			<h1 class="hero__main">The easier way to write and collaborate</h1>
			<p class="hero__tagline">Edit, post and share content with your peers in a simple way.</p>
			<a href="#start" class="action-btn hero__action" data-start>Get started</a>
		</div>
	</div>	

	<div class="hero__screenshot" data-scroll-reveal="enter bottom after .2s"><img src="img/screenshot.png" alt="Screenshot of Jott.ly, which shows the main view of the app"></section>

	<section role="region" class="container features" aria-labelledby="features__title">
		<div class="container__in">
			<h2 class="hidden" id="features__title">Features of Jott.ly</h2>
			<ul class="features__list">
				<li class="features__item" data-scroll-reveal="enter bottom">
					<svg class="features__img"> <use xlink:href="img/sprite.svg#feature1"/> </svg>
					<h3 class="features__title">Write</h3>
					<p class="features__text">No distractions, the focus is on the words and nothing else.</p>
				</li>
				<li class="features__item" data-scroll-reveal="enter bottom and wait .3s">
					<svg class="features__img"> <use xlink:href="img/sprite.svg#feature2"/> </svg>
					<h3 class="features__title">Colaborate</h3>
					<p class="features__text">A team of two, ten or 100 people - it doesn&rsquo;t really matter how big.</p>
				</li>
				<li class="features__item" data-scroll-reveal="enter bottom and wait .6s">
					<svg class="features__img"> <use xlink:href="img/sprite.svg#feature3"/> </svg> <h3 class="features__title">Share</h3>
					<p class="features__text">It was never easier: one-click sharing right from the start.</p>
				</li>
			</ul>
		</div>
	</section>

	<section role="region" class="container works works--right" aria-labelledby="works__title1">
		<div class="container__in">
			<div class="container__in__in">
				<h2 class="container__title works__title" id="works__title1">How Jott.ly works</h2>

				<div class="works__content">
					<p class="works__text">You are the author, so you should never need to worry about this fact. Upload once, use everywhere. The same goes for the settings: set and forget. Set &rsquo;em here, use &rsquo;em everywhere, it&rsquo;s as simple as that. Start writing, stop thinking.</p>
				
					<ol class="works__features">
						<li class="works__item works__item__one">Just set the author once and it is applied to all of your documents.</li>
						<li class="works__item works__item__two">Easy access to your settings, so you don&rsquo;t have to worry where all of your data is going when you are done.</li>
					</ol>
				</div>

				<div class="works__screen" data-scroll-reveal="enter left">
					<div class="works__screen__in"><img src="img/screenshot.png" alt="Screenshot of Jott.ly, which shows the main view of the app"> </div>
					<svg class="works__screen__m1" width="3em" height="2em"> <use xlink:href="img/sprite.svg#marker1"/> </svg>
					<svg class="works__screen__m2" width="2em" height="3em"> <use xlink:href="img/sprite.svg#marker2"/> </svg>
				</div>
			</div>
		</div>
	</section>

	<section role="region" class="container users" aria-labelledby="users__title">
		<div class="container__in">
			<div class="container__in__in">
				<h2 class="container__title users__title" id="users__title">What our users are saying</h2>
				
				<blockquote class="users__item" data-scroll-reveal="enter bottom">
					<div class="users__photo"> <img src="img/avatar1.png" alt="Photo of Vincent Williams" width="139" height="139"> </div> <p class="users__text">I discovered jott.ly by accident, but never want to go back. So easy. <cite class="users__info">Vincent Williams, founder of Slapbook</cite></p>
				</blockquote>
				
				<blockquote class="users__item" data-scroll-reveal="enter bottom and wait .3s">
					<div class="users__photo"> <img src="img/avatar2.png" alt="Photo of Valerie Welch" width="139" height="139"> </div>
					<p class="users__text">The last time I used jott.ly with my colleagues I was blown away. <cite class="users__info">Valerie Welch, part-time wrangler</cite></p>
				</blockquote>
			</div>
		</div>
	</section>

	<section role="region" class="container works works--left" aria-labelledby="works__title2">
		<div class="container__in">
			<div class="container__in__in">
				<h2 class="container__title works__title" id="works__title2">Write and collaborate</h2>
				
				<div class="works__content">
					<p class="works__text">Collaborating with other team members has never been so easy. Just start to write and the app takes care of the rest. Enter the title, craft a beautiful text and never worry about all the other hassle you typically have in other apps.</p>
				
					<ol class="works__features">
						<li class="works__item works__item__three">Your title earns the best position and that&rsquo;s what it gets. Just click, write and finish. As simple as that.</li>
						<li class="works__item works__item__four">A beautiful, wide open writing space with no distractions.</li>
					</ol>
				</div>
					
				<div class="works__screen" data-scroll-reveal="enter right">
					<div class="works__screen__in"><img src="img/screenshot.png" alt="Screenshot of Jott.ly, which shows the main view of the app"> </div>
					<svg class="works__screen__m3" width="3em" height="2em"> <use xlink:href="img/sprite.svg#marker3"/> </svg>
					<svg class="works__screen__m4" width="3em" height="2em"> <use xlink:href="img/sprite.svg#marker4"/> </svg>
				</div>
			</div>		
		</div>
	</section>

	<section role="region" class="container start" aria-labelledby="start__title" id="start">
		<div class="container__in">
			<div class="container__in__in" data-scroll-reveal="enter bottom">
				<h2 class="container__title start__title" id="start__title">Your free trial</h2>
				<p class="start__text">No risk, just fun. Enter the fields and we will never bother you again.</p>
				
				<form class="start__fields" action="">
					<div class="formrw start__name"><label for="start__name"></label><input type="text" id="start__name" placeholder="Your name" required="required" aria-required="true"></div>
					<div class="formrw start__email"><label for="start__email"></label><input type="email" id="start__email" placeholder="Your email" required="required" aria-required="true"></div>
					<div class="formrw--last start__button"><button class="start__button__in">Get started</button></div>
				</form>
				
				<div class="start__follow">
					<p class="start__follow__text">For updates follow us on:</p>
					<ul class="start__follow__social">
						<li class="start__follow__item start__follow__twitter"><a href="#"><svg width="31" height="31" class="start__follow__icon"> <use xlink:href="img/sprite.svg#twitter"/> </svg></a></li>
						<li class="start__follow__item start__follow__facebook"><a href="#"><svg width="31" height="31" class="start__follow__icon"> <use xlink:href="img/sprite.svg#facebook"/> </svg></a></li>
						<li class="start__follow__item start__follow__instagram"><a href="#"><svg width="31" height="31" class="start__follow__icon"> <use xlink:href="img/sprite.svg#instagram"/> </svg></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>

<?php include("inc/footer.php"); ?>	
<?php include("inc/foot.php"); ?>