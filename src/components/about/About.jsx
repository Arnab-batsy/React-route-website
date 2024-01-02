import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://scontent.fccu27-1.fna.fbcdn.net/v/t1.6435-9/166313509_175810004372040_1991732359297500935_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Vh6GdOlNLqMAX_CYiL6&_nc_ht=scontent.fccu27-1.fna&oh=00_AfDD4xUzuC6wjIl9ttZNufYrAfWZy9r94E-hfufbcm5NvQ&oe=65B69C0D"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              We are Epiphany Music
            </h2>
            <p className="mt-6 text-gray-600">
              Immerse yourself in a diverse range of genres, from classical to
              indie, and experience the transformative power of sound. As a
              community, we celebrate the extraordinary in music. Follow us on
              YouTube, Facebook, Instagram, and Twitter to stay connected. When
              you upload your content on our app, it automatically resonates
              across all platforms, amplifying your voice. Join us on this sonic
              journey, where every track is a revelation. Embrace the magic of
              Epiphany Music, where artistry and discovery converge in a
              symphony of inspiration!
            </p>
            <p className="mt-4 text-gray-600">
              Our commitment to amplifying your music extends beyond our
              platform. By seamlessly sharing your content across our YouTube
              channel, Facebook, Instagram, and Twitter, we ensure your artistry
              reaches a wider audience. This innovative feature, exclusive to
              Epiphany Music, maximizes your impact and fosters community
              engagement. Join us in celebrating the diverse tapestry of musical
              expression, where every artist's journey becomes a shared
              revelation. At Epiphany Music, we're not just a streaming service; we're your partners in
              making every note count. 
              <br/>
              🎵 #EpiphanyMusic 🌟 #AmplifyYourSound
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
