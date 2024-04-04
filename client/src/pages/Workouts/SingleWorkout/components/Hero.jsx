import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <>
    

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
