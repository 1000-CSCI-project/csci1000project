export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>

            <h1 className='title'> Hello, I'm Reid Cooper. </h1>
          </div>

          <img
            className='pic'
            src='https://bloximages.newyork1.vip.townnews.com/denvergazette.com/content/tncms/assets/v3/editorial/e/87/e8732642-a9c9-11ee-bae2-4bd6e7b9042d/6594a1d41c5ec.image.jpg?crop=1024%2C768%2C170%2C0&resize=1200%2C900&order=crop%2Cresize'
            alt='ReidCooper'
          />

          <p className='description'>
          I am currently attending CU Boulder with a focus on computer science.
          I am 18 years old, and originally from Lakewood, Colorado.
          One of my favorite places in Colorado has to be Red Rocks Amphitheater which is why I featured it in the photo up above.
          I have really enjoyed my 12 short weeks here so far and am looking forward to continuing my journey in CS as well as looking into potentially a chemical engineering minor.
          As of now I'm looking forward to Thanksgiving Break and getting a little bit of R&R.
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .pic {
            height: 250px;
            width: 450px;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}