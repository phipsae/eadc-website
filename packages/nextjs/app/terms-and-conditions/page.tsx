import type { NextPage } from "next";

/* eslint-disable react/no-unescaped-entities */
const TermsAndConditions: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-neutral mb-8">Terms & Conditions</h1>

          <div className="bg-base-200 rounded-2xl p-8 shadow-sm border border-base-300">
            <p className="text-base-content/80 leading-relaxed">
              These Terms and Conditions ("Terms") govern participation in the Ethereum Application Developer
              Certification (the "Program"). By registering for or participating in the Program, you ("Participant")
              agree to be bound by these Terms.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">1. PURPOSE & NATURE OF THE PROGRAM</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>1.1</strong> The Program is an educational initiative offered by the Ethereum Foundation (the
                  "EF") to support learning in onchain application development.
                </p>
                <p>
                  <strong>1.2</strong> The Program is provided for educational purposes only. Participation does not
                  create any employment, partnership, or agency relationship between EF and the Participant.
                </p>
                <p>
                  <strong>1.3</strong> The Program, any resulting certification, and related materials do not constitute
                  any endorsement or validation by EF of a Participant's skill, code, or project.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">2. PARTICIPATION & CONDUCT</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>2.1.</strong> Participation is open to individuals selected or invited by EF. EF may, in its
                  discretion, limit, suspend, or revoke participation.
                </p>
                <p>
                  <strong>2.2.</strong> Participants shall:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Act in a respectful and lawful manner consistent with Ethereum community values; and</li>
                  <li>
                    Not use the Program or related materials for unlawful purposes, including any activity contrary to
                    applicable sanctions, export control, or data protection laws.
                  </li>
                </ul>
                <p>
                  <strong>2.3.</strong> The EF may remove a Participant from the Program for misconduct, breach of these
                  Terms, or other good cause.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">3. CERTIFICATION</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>3.1.</strong> Participants who successfully complete the Program may receive a certificate
                  evidencing participation or completion ("Certificate").
                </p>
                <p>
                  <strong>3.2.</strong> A Certificate indicates only that the Participant has met the Program's
                  completion requirements at a point in time. It does not guarantee technical competence, job
                  qualification, or code security.
                </p>
                <p>
                  <strong>3.3.</strong> EF may amend or withdraw certification criteria, or revoke a Certificate, if
                  issued in error or obtained through misconduct.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">4. INTELLECTUAL PROPERTY</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>4.1.</strong> All educational materials, documentation, and other content provided by EF
                  ("Materials") are owned by EF or its licensors.
                </p>
                <p>
                  <strong>4.2.</strong> Participants may use the Materials solely for personal educational purposes
                  within the Program.
                </p>
                <p>
                  <strong>4.3.</strong> Participants retain ownership of any code, projects, or submissions they create
                  ("Participant Work"). By submitting Participant Work, the Participant grants EF a non-exclusive,
                  worldwide, royalty-free licence to use, reproduce, and display such work solely for Program
                  administration, review, and non- commercial showcase purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">5. PRIVACY & DATA PROTECTION</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>5.1.</strong> EF may collect and process personal data relating to Program participation (for
                  example, name, contact information, course progress, submissions, and certification records) in
                  accordance with the EF's Privacy Policy here:{" "}
                  <a
                    href="https://ethereum.org/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary"
                  >
                    https://ethereum.org/privacy-policy/
                  </a>
                  .
                </p>
                <p>
                  <strong>5.2.</strong> By participating in the Program, the Participant acknowledges that EF may
                  process their personal data for Program administration, communication, and record-keeping as described
                  in the Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">6. WARRANTIES & DISCLAIMERS</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>6.1.</strong> The Program and all Materials are provided "as is" and without any warranty,
                  express or implied, including any warranties of accuracy, completeness, non-infringement, or fitness
                  for a particular purpose.
                </p>
                <p>
                  <strong>6.2.</strong> EF does not warrant that any Participant Work, software, or onchain deployment
                  arising from the Program will be secure, functional, or free from vulnerabilities.
                </p>
                <p>
                  <strong>6.3.</strong> Participants acknowledge that any deployment of code to a blockchain network is
                  at their own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">7. LIMITATION OF LIABILITY</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>7.1.</strong> To the fullest extent permitted by applicable law, EF and its directors,
                  officers, employees, contractors, and contributors shall have no liability whatsoever for any loss,
                  damage, claim, or expense arising out of or in connection with the Program, the Materials, any
                  Participant Work, or any onchain or offchain activity related thereto.
                </p>
                <p>
                  <strong>7.2.</strong> Without limiting the foregoing, EF shall not be responsible for any errors,
                  omissions, interruptions, security incidents, loss of data, or any direct, indirect, incidental,
                  consequential, or special damages of any kind, whether based in contract, tort, or otherwise.
                </p>
                <p>
                  <strong>7.3.</strong> Nothing in these Terms excludes or limits any liability that cannot be excluded
                  under mandatory provisions of Swiss law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">8. COMPLIANCE</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>8.1.</strong> By registering for or participating in the Program, the Participant represents
                  and warrants that, both at the time of registration and throughout their participation in the Program,
                  they:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Are not a person, entity, or organisation that is the subject of any sanctions, restrictions, or
                    similar measures administered or enforced by Switzerland, the European Union, the United Kingdom, or
                    the United States (including the US Department of the Treasury's Office of Foreign Assets Control);
                  </li>
                  <li>
                    Are not owned or controlled, directly or indirectly, by any such sanctioned person or entity; and
                  </li>
                  <li>
                    Are not ordinarily resident in, located in, or accessing the Program from any country or region that
                    is the subject of comprehensive trade or economic sanctions or embargoes (including, without
                    limitation, Cuba, Iran, North Korea, Syria, or the Crimea, Donetsk, or Luhansk regions of Ukraine).
                  </li>
                </ul>
                <p>
                  <strong>8.2.</strong> Participants must not make the Program, its Materials, or any related technology
                  or know-how available, directly or indirectly, to any person or destination if such activity would
                  violate applicable export- control or sanctions laws.
                </p>
                <p>
                  <strong>8.3.</strong> EF reserves the right to deny, suspend, or terminate participation if it has
                  reason to believe that a Participant has made a false representation under this clause or is otherwise
                  subject to relevant sanctions restrictions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">9. GOVERNING LAW & DISPUTE RESOLUTION</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Switzerland, without
                  regard to its conflict of laws principles. Any dispute arising out of or relating to the Program shall
                  be subject to the exclusive jurisdiction of the competent courts of Zürich, Switzerland.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">10. CHANGES TO THE PROGRAM</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  EF reserves the right to modify, suspend, or terminate the Program, or any component thereof, at any
                  time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral mb-4">11. MISCELLANEOUS</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>11.1.</strong> If any provision of these Terms is held invalid, the remaining provisions
                  remain in full force and effect.
                </p>
                <p>
                  <strong>11.2.</strong> Failure to enforce any right or provision shall not constitute a waiver.
                </p>
                <p>
                  <strong>11.3.</strong> These Terms constitute the entire agreement between EF and the Participant
                  regarding the Program and supersede all prior understandings.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-base-300">
            <p className="text-sm text-base-content/60 text-center">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
