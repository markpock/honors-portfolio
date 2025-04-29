import { Circle, CircleDot, CircleOff } from "lucide-react"

const box = (title : string, text : React.ReactElement, icon : React.ReactElement) =>
  <div className="bg-white/10 rounded-lg p-6 space-y-3">
    <div className="flex items-center space-x-3">
      {icon}
      <h3 className="text-lg font-serif font-bold">{title}</h3>
    </div>
    <p className="text-white"> {text} </p>
  </div>

export default function () {
  return <div className="container mx-auto px-4 pt-10 pb-30 max-w-5xl">
    <div>
      <div className="flex flex-col items-center py-10">
        <div className="text-center font-serif text-4xl font-bold py-3">
          Learning Statement
        </div>
        <span className="h-0.5 w-50 bg-amber-50"></span>
      </div>
      
      <section className="bg-black/30 rounded-xl p-12 backdrop-blur-md">
        <div className=" prose prose-invert max-w-none">
          <h2>Prolegomena to any future portfolio </h2>
          <p>
            I wish that there were one story to tell about the journey on which I have been these past four
              years &mdash; a single coherent narrative of my development through university, who I am, and so on.
            Alas, life has been messier, murkier, muddled.
            If there is a central lesson to have come out of all this, it may precisely be that coherence is
              the exception, not the norm.
          </p>

          <p>
            The goal of this learning statement &mdash; and more broadly, this portfolio &mdash; is to impart the values,
              philosophies, etc. that guide and define me as a person and learner
              (or at least have done so during these last four years).
            I must surely begin obliquely by saying that there is no way to do this succinctly &mdash; philosophy is
              a loaded word for me, and so attempting to achieve this goal veers dangerously close to attempting
              to articulate an <i>argument</i> about what the "right" philosophy is.
            This argument would in all likelihood be incoherent and abstract &mdash; I myself hardly know what the right
              answer to these universal questions are.
            Instead, I will attempt to articulate the distinctive evolution of a paradigm &mdash;
              a way of viewing the world and
              a toolkit for solving problems assembled ad hoc from the resources of a variety of
              disciplines and experiences.
          </p>

          <h2>A genealogy of me-rals</h2>
          <p>
            There are five vaguely "disciplinary" threads that interweave (or have interwoven in the past) to make up this
              paradigm.
              <ol>
              <li><b>Logic. </b>
                Logic is perhaps the closest thing to a unifying pursuit for my whole UW experience.
                Though UW has little coursework on logic beyond a basic introduction to symbolic logic,
                my personal explorations in theorem proving and type theory have made logical tools
                indispensable to my way of viewing the world.
              </li>
              <li><b>Art. </b>
                The name here is perhaps a little bit misleading &mdash; I've never been a visual artist.
                Nevertheless, I've composed music, acted, written creatively, and directed a play &mdash;
                could I give any other name to that complex of affairs?
              </li>
              <li><b>Leadership. </b>
                Once again, the name suggests much but says little (correct), and I could hardly speak
                of disciplinary tools of leadership which I have absorbed. Instead, I have been provided
                by "leadership" a stock of strange challenges on all fronts.
              </li>
              <li><b>Philosophy. </b>
                Philosophy was something I was sure I would take up at the university. I eventually made
                my way there, and only partially in the way I first expected.
              </li>
              <li><b>Computer science. </b>
                Computer science is certainly the dark horse among these five threads. It was something I
                stumbled into by mistake, and which held me fast until I no longer wanted to leave.
              </li>
            </ol>
            Perhaps the closest thing to a "story" I could tell might be, if you will, a "tale of two 'l's":
              a move away from leadership and towards logic.
            When I came to UW, I wanted to be a lawyer, and I thought of myself as an artistic person
              whose primary interests were to be found in the humanities.
            I hoped to someday go into politics and emulate historical greats.
            I assumed I would take a philosophy major and something else &mdash; maybe something like
              business, maybe something else in the humanities.
            Computer science came up behind me after I took an introductory programming class during my
              first quarter here.
            I loved it, but perhaps what I loved about it was different than what normally fascinates
              students in introductory programming classes (which I assume to be the visceral reality
              of actually creating something).
          </p>

          <p>
            Instead, what I loved about computer science was, ironically, the formal syntax &mdash; the
              absolute clarity and occasional idiosycracy of a programming language.
            That spring, I took PHIL 120 &mdash; Introduction to Formal Logic &mdash; and was even more
              hooked on an even more formal language: first-order logic.
            In retrospect, my <i>syntactic</i> love of computer science was always logical (this
              syntactic element is distinctively proof-theoretic, as opposed to views that are
              more mathematical).
          </p>

          <p>
            That didn't mean I stopped aspiring towards leadership.
            That year, I attempted to start an RSO (it didn't go very well) and the year after
              obtained leadership of two RSOs, and a concomitant seat in ASUW senate, where I
              joined the student technology fee committee.
            The year after that, I became chair of the student technology fee committee,
              which consumed the vast majority of my time.
            After that, I made a deliberate choice to step away from student government and really
              stopped aspiring to ever do politics.
          </p>

          <p>
            If leadership and logic were both threads which were always present but about which
              I pivoted, each had an extreme &mdash; respectively art and computer science.
            By this I mean largely to say that the effect of my shift away from leadership was
              a nigh-wholesale replacement of the role which art once played in my life and
              perspective with computer science.
            Philosophy is, and remains, a pole around which I rotated; though my interests in
              philosophy have also shifted accordingly: away from the applied, ethical,
              historical dimension and towards a metaphysical "first-philosophy" orientation.
          </p>
          
          <h2>The structure of personal revolutions</h2>
          <p>
            What is this "logical" paradigm on which I have landed?
            It is a view towards all five threads, perhaps (though it has its primary
              efficacy in logic, philosophy, and computer science):
            an equivalence between
            <ol>
              <li>Modal operators.</li>
              <li>Sections of a work.</li>
              <li>Leadership styles.</li>
              <li>Moments of a dialectic.</li>
              <li>Computational contexts.</li>
            </ol>
            We may also add discrete and continuous mathematical points of view &mdash; that these
              same elements are also equivalent to nodes in a graph and open sets in a space.
            The driving unity behind these seven representations is the notion of a context in which
              something happens.
            The equivalence between modal operators and computational contexts is well-understood;
              as is the equivalence between moments of a dialectic and sections of a work.
            Leadership style can be seen as an instance of a particular dialectic.
            The real work here is in equating moments of a dialectic and modal operators, which was
              first suggested by William Lawvere in his formalization of Hegel's Science of Logic.
          </p>

          <p>
            I have taken this strange equivalence to heart, and will readily interchange reasoning
              in one discipline with reasoning in another by means of this equivalence, especially
              as a way of attacking philosophical problems or personal problems that can be
              understood according to these heuristics.
          </p>

          <h2> Theses on the concept of dialectic(s) </h2>
          <p>
            Perhaps the single most resonant concept for me during my time at the University has been
            the <i>dialectic</i>.
            It has been an intellectual goal &mdash; something I've tried to refine my understanding of.
            It has been an intellectual tool &mdash; something I've deployed to solve problems and reframe situations.
            And of course, it has been a structuring theme, as I might claim it always is for everyone,
              whether consciously or unconsciously.
          </p>

          <p>
            I will exposit dialectic as a schema for the "ideal evolution" of modelling practices
              (not historically, and also not "according to the best" &mdash; just "in the world of ideas").
            Doubtless, there are a number of sins I will commit in this exposition &mdash; dialectic is obscure to
              me at the best of times (though it has nevertheless proved infuriatingly useful).

            Under this simplified schema, the dialectic comprises three phases, or “moments”.
            
          </p>
          <div className="grid grid-cols-3 gap-6 not-prose">
            {box(
              'Abstract',
              <p>
                An abstract model is posited unreflectively &mdash; <i>immediately</i>. The model
                "just appears" for the subject -- perhaps not even cognized as a <i>model</i>, but
                instead taken to be the way reality <i>is</i>.
              </p>,
              <Circle className="text-gray-300"/>
            )}
            {box(
              'Negative',
              <p>
                The subject, who has ends in reality, finds that the model fails to accomplish those
                ends, and so begins to cognize the model explicitly <i>as a model</i> &mdash; as a
                broken tool.
              </p>,
              <CircleOff className="text-red-300"/>
            )}
            {box(
              'Concrete',
              <p>
                The subject incorporates the failure of the model into the next model, which once
                again appears immediate (as a result of having forgotten the process that led to
                the new development of the model).
              </p>,
              <CircleDot className="text-blue-400"/>
            )}
          </div>
          <p>
            The progress between each of these moments is called sublation, which has the dual meaning
              of preservation and cancellation.
            Something of the former moment is preserved in the later; and yet something is negated as well.
          </p>
        
          <p>
            We get the first inkling of the real force of this schema when we
            <ol>
              <li>recognize that
              the model is not external to the subject, but is instead part of the subject themself, and
              that a "change in the model" is in fact a change in the subject.  The second blow comes when we</li>
              <li>contemplate the "object" of the subject's models -- "reality",
              accepted uncritically; yet what we see is that the subject's idea of what reality is becomes
              altered through progressive stages of models: that the characteristics of the object grow
              and change over time. The final piece comes as we</li>
              <li>apprehend that the subject and object were all along one; each
              parts of a greater organic whole, and that the development of the subject <i>is</i> the
              development of the object; likewise, the development of the object is the development of the
              subject.</li>
            </ol>
            And in this reflection on the force of the dialectic, we find that we have constituted a
            dialectical progression! The immediacy of "a change in the subject" is eventually developed
            towards the dialectical totality of "a change in the organic whole of subject and object" by
            recognizing that "change in the subject" alone was insufficient to account for the very real
            and present truth that our ontologies shape the world around us both metaphorically and literally.       
          </p>

          <h2>I am a strange lesson</h2>
          <p>
            I first learned about the dialectic before I came to UW, after stumbling across a Wikipedia article
              in middle school. My notion of the dialectic transformed (dialectically, if you will) over my time here.
            I got the chance to encounter Hegel's work directly during the summer after my sophomore year, and
              during my junior year read about Adorno's conception of negative dialectics.
            During my senior year, I read about Deleuze's notion of problem.
          </p>

          <p>
            This has led me to conclude that the dialectic sublates itself.
            If the dialectic as expressed above consists in a linear progress from the abstract to the concrete,
              it surely appears like an abstract model of history which fails to accommodate the real possibilities
              of decline and radical rupture.
            But radical rupture is a radical rupture into, in particular into ideal multiplicity &mdash;
              what Walter Benjamin analogized to a constellation.
            I present this notion of constellatory dialectics / multiple dialectics / graph dialectics
              (a terminology again ordered dialectically: constellation, multiplicity, graph
              (read as proof net, or geometry of interaction, also more basically as implication graph;
              see also the constellation as atom of the transcendental syntax))
              as the concrete universality which sublates Adorno's negative dialectics
              (we thus have absolute dialectics, negative dialectics, constellatory dialectics).
          </p>
          
          <p>
            The starry constellations above mark the world of ideal ideality into which human projects project
              (that is, Human projects [Project] and [human Projects] project).
            It is no coincidence that Benjamin as aesthetician develops this notion of constellation.
            I will also organize the work according to the secondary thread of what I may effusely call the ideal
              ideality of the aesthetic dimension, which is itself something of an ideal ideality;
              namely the tradition of absolute music (here also Absolute, per Hegel).
            Dialectical moments are individuated into “rhetorical” or “formal” moments &mdash; simultaneously the
              moments of sonata form and fugue.
          </p>

          <h2>The phenomenology of (this) portfolio</h2>
          <p>
            This portfolio tracks the evolution of a number of concrete disciplines or dimensions in which I've evolved,
              each progressing according to its own dialectical drive;
              each intertwined according to the principle of constellation.
            I wish that I could say that all five of these threads cohere in the right way;
              sadly, almost none of them do (hence the need for multiplicity).
            I will try to tell a coherent story according to each of these,
              but I think that they all run up into various points of conflict.
            <ol>
              <li><b>Logic.</b>
                Logic is perhaps the closest thing to a unifying thread
              </li>
              <li><b>Philosophy.</b></li>
              <li><b>Computer science.</b></li>
              <li><b>Leadership.</b></li>
              <li><b>Art.</b></li>
            </ol>
            
            I find perhaps most important how my ideas have changed (and have not changed) since I came to UW.
            Where I've ended up is what I have tried to convey in this learning statement,
              but I fear that I have only managed to convey my attitude towards philosophy and
              have failed to develop the connection to computer science through logic.
            The general form of this fear &mdash; or its various counter-determinations &mdash;
              grounds the concrete question which I now face; “what is to be done” after UW.
          </p>

          <p>
            On that note of uncertainty, I bid you a warm welcome to my portfolio.
          </p>
          
          <p>References to</p>
          <ol>
            <li>Prolegomena to any future metaphysics</li>
            <li>A genealogy of morals</li>
            <li>The structure of scientific revolutions</li>
            <li>Theses on the concept of history</li>
            <li>I am a strange loop</li>
            <li>The phenomenology of spirit</li>
          </ol>
        </div>
      </section>
    </div>
  </div>
}
