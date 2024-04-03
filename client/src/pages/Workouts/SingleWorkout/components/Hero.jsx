import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <>
    <div class="container">
        <div class="grid">
            <section>
                <hgroup>
                    <h2>Fitness Journey</h2>
                    <h3>Start Your Transformation Today</h3>
                </hgroup>
                <p>Published on July 15, 2024</p>
                <figure>
                    <img src="https://via.placeholder.com/1024x768" alt="Fitness Lifestyle" />
                    <figcaption>Photo by <a href="https://unsplash.com" target="_blank">Unsplash</a></figcaption>
                </figure>
                <article>
                    <h3>Why Fitness Matters</h3>
                    <p>The importance of fitness cannot be understated in today's lifestyle...</p>
                    <h3>Workout Routines</h3>
                    <p>Discover workouts that can transform your physique and boost your stamina...</p>
                    <h3>Nutrition and Diet</h3>
                    <p>What you eat is just as important as your workout...</p>
                </article>
            </section>
        </div>
    </div>

    <aside class="sidebar">
        <section aria-label="Latest News">
            <h2>Latest News</h2>
            <ul>
                <li><a href="#">Our first office</a></li>
                <li><a href="#">Enterprise Design tips</a></li>
                <li><a href="#">Partnered up with Google</a></li>
            </ul>
        </section>

        <section aria-label="Subscribe">
            <div class="container">
                <article>
                    <hgroup>
                        <h2>Stay Updated</h2>
                        <h3>Join our newsletter</h3>
                    </hgroup>
                    <form class="grid">
                        <input type="text" id="firstname" name="firstname" placeholder="First Name" aria-label="First Name" required />
                        <input type="email" id="email" name="email" placeholder="Email Address" aria-label="Email Address" required />
                        <button type="submit" onclick="event.preventDefault()">Subscribe</button>
                    </form>
                </article>
            </div>
        </section>

        <section aria-label="Comments">
            <h2>Discussion</h2>
        </section>
    </aside>

    <footer class="container">
        <section aria-label="Related Articles">
            <div class="grid">
            </div>
        </section>

        <small>
            <a href="#">Privacy Policy</a> • <a href="#">Terms of Use</a>
        </small>
    </footer>
</>
  );
}
export default Hero;
