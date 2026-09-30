import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Reference License",
  description:
    "The Figure Archives Artist Reference License explains how artists may use reference studies to create and sell original artwork.",
};

export default function LicensingPage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          Artist Reference License · V1
        </div>

        <h1>
          Make something
          <br />
          of your own.
        </h1>

        <p>
          Figure Archives exists to help artists create.
          Our reference license is designed to make that
          permission clear, practical, and easy to understand.
        </p>
      </section>

      <section className="license-intro shell">
        <div className="eyebrow">In plain language</div>

        <p className="license-statement">
          Draw it. Paint it. Sculpt it.
          Exhibit it. Sell the original
          artwork you create from it.
        </p>
      </section>

      <section className="license-grid shell">
        <div className="license-column allowed">
          <div className="license-symbol">✓</div>

          <div className="eyebrow">You may</div>

          <h2>Create from the reference.</h2>

          <ul>
            <li>Draw from the photographs</li>
            <li>Paint from the photographs</li>
            <li>Create sculpture from the photographs</li>
            <li>Create illustrations from the photographs</li>
            <li>Combine references into new compositions</li>
            <li>Exhibit your resulting original artwork</li>
            <li>Sell your resulting original artwork</li>
            <li>
              Sell reproductions or prints of your resulting
              original artwork
            </li>
          </ul>
        </div>

        <div className="license-column restricted">
          <div className="license-symbol">×</div>

          <div className="eyebrow">You may not</div>

          <h2>Redistribute the reference.</h2>

          <ul>
            <li>Resell the original reference photographs</li>
            <li>Share the downloaded collection with others</li>
            <li>Upload the reference files to another library</li>
            <li>Publish the photographs as your own work</li>
            <li>
              Include the original files in a commercial
              reference pack
            </li>
            <li>
              Use the photographs to create a competing
              reference-image library
            </li>
            <li>
              Transfer your Figure Archives access to
              another person
            </li>
          </ul>
        </div>
      </section>

      <section className="license-principle">
        <div className="shell">
          <div className="eyebrow">The principle</div>

          <p>
            The reference remains theirs.
            <br />
            What you create from it is yours.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="license-details">
          <div>
            <div className="eyebrow">
              A note on interpretation
            </div>

            <h2>
              Reference is a starting point,
              not the finished work.
            </h2>
          </div>

          <div>
            <p>
              Figure Archives is built around artistic
              transformation. The photographs exist as source
              material for observation, study, interpretation,
              and the creation of new artwork.
            </p>

            <p>
              Your purchased license applies to you as the
              acquiring artist. Access to the underlying
              photographic files is not transferable.
            </p>

            <p className="legal-note">
              This page summarizes the intended Figure Archives
              Artist Reference License in plain language. Formal
              Terms of Use and the final legal license agreement
              will govern purchases before commercial launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
