# Sergey Kasatov - AI Automation and Data Analytics

Cologne, Germany. Available now (since September 2026).

This is the machine-readable mirror of https://kasatov.de/. Same information as the
website, in a format agents can parse directly. The designed version lives at the
HTML pages linked below.

## TL;DR

- Data analyst and AI automation specialist with 17 years of prior automotive
  engineering on Ford, GM, Opel and Stellantis programs: product development,
  supplier quality, and launch management.
- Retrained into data analytics (Masterschool, Data Analytics Program AZAV,
  Advanced Data Science and AI). Python, SQL, Tableau, machine learning, with a
  preference for interpretable models.
- Designs and operates a private multi-agent system: 19 recurring workflows, each with
  exactly one scheduled owner, run by three LLM runtimes and a self-hosted n8n server
  on one Markdown rule set, across two deliberately independent machines.
- Thirteen completed portfolio projects, three of them deployed online. Open to AI consulting
  and enablement, automation, and data analyst positions in Germany (employment,
  not freelance services), available now.

## Contact and profiles

- Email: sergey@kasatov.de
- Website: https://kasatov.de/
- LinkedIn: https://www.linkedin.com/in/sergey-kasatov
- GitHub: https://github.com/sergey-kasatov
- Tableau Public: https://public.tableau.com/app/profile/sergey.kasatov/vizzes

This website is the primary node. The profiles above are secondary representations
of the same person.

## Positioning

Seventeen years inside vehicle development taught the habit that matters most in
analytics: find the root cause, quantify it, and make the result something a
non-technical stakeholder can act on. The work was always data work, it just ran on
Excel pivots, KPI packs and 8D reports instead of Python and SQL.

The strongest fit is where AI and automation meet an industrial process: designing
agent workflows a business can trust, judging feasibility, benefit and risk, and
translating between a technical build and the people who have to rely on it. Analytics
in manufacturing, quality or operations is the same profile from the other side, where
the domain knowledge is not decoration: knowing why a brake-condition signal dominates
a failure model, or what a launch-phase issue backlog actually costs, is the difference
between a model that scores well and a model someone trusts.

The same instinct now runs on the work itself. Since mid-2026 a private multi-agent
system handles the recurring parts of a job search, a full-time data programme and
several admin domains. The design question there was never whether an agent can do the
task, but how to stop it from silently doing the wrong thing: one scheduled owner per
workflow, a deterministic layer under the semantic one, agents bounded to a stated set
of options, verification gates that can fail a run, and a watchdog on a machine that
cannot fail together with what it watches.

## Skills

Technical: SQL, Python, pandas, Tableau, Excel and Power Query, machine learning,
NLP, deep learning, AI agent workflows (n8n), prompt engineering and structured LLM
outputs, AI strategy and governance, data cleaning, exploratory data analysis,
KPI design, dashboards, DBeaver, Jupyter.

Domain: automotive quality engineering, 8D problem solving, SPC, PPAP, APQP,
launch management, body in white and closures, supplier quality.

Languages: Russian (native), English (C1), German (B2).

## Portfolio projects

Thirteen completed projects, in the order of the site's parts list: by weight, the
running systems first, not by date. Every metric below is reproducible from the linked
repository, or demonstrable online.

### 1. Arkon Manufacturing AI (live executive view on Tableau Public)

An Industry 4.0 quality platform for a fictional heavy manufacturer, deployed on a
NAS and running. Seven machine-learning models on real public datasets (remaining
useful life of test engines, fleet fault classification, four kinds of visual
inspection, a text model over consumer complaints) publish one twelve-field risk
event, so nothing downstream knows which model spoke. A Quality Steering Cell on n8n
validates the contract, suppresses repeats, writes an append-only incident store,
assigns by department and puts a Telegram card in front of a named person for a P1
or P2. A Streamlit cockpit is the only surface that moves an incident; a Langflow
assistant answers why, grounded in ten documents and the live store, and hands the
operator a filled form instead of signing it, so the response-time KPI still
measures the plant and not the agent. A live emitter raises a real re-timed incident
every eight to twelve minutes and a simulated crew works it. The executive view is a
Tableau workbook generated as XML from the same status API and published on Tableau
Public. 7 ML models, 6 n8n workflows deployed, 130 tests in CI. The code repository
is not public yet; the plant, its crew and the incident stream are simulated and
labelled so, the models, the datasets, every timestamp and the n8n, Langflow,
Streamlit and Tableau layers are real.

- Executive view (Tableau Public): https://public.tableau.com/views/ArkonQualitySteeringCell/ArkonExecutiveView
- Explore view (Tableau Public): https://public.tableau.com/views/ArkonQualitySteeringCell/ArkonExploreView

### 2. AI-Brain Agent System (private, in daily operation)

A multi-agent system that runs unattended. 19 recurring workflows, each naming exactly
one scheduled owner and one canonical output path, because several agents write the
same files with no database lock and ownership is what stops two runs producing two
conflicting versions of one report. Three LLM runtimes (Claude Code, OpenAI Codex,
Google Gemini) plus a self-hosted n8n server read the same canonical Markdown rules, so
no workflow is tied to one vendor. A deterministic Python layer does the fetching,
parsing, deduplication and file writing; the model is handed only the judgement that
needs judgement. Five verification gates can fail a run: identifier consistency against
the registry and archive, encoding, machine readability of generated PDFs, content
fidelity against the source-of-truth file, and style. Two schedulers run on two
deliberately independent machines, so the watchdog cannot fail together with what it
watches.

The failure modes are the substantive result, each found by operating the system:
fabricated metrics offered as interview material (specificity is what a fabricated
metric looks like, not evidence against one); a drafting agent absorbing the source
document's vocabulary into its description of the person; a silent scheduler outage
that is indistinguishable from a healthy machine with no network; and the class no gate
catches, where a documented method is escalated by the verb rather than the noun. That
last one is recorded as a stated limit, not as a solved problem.

Boundary, stated up front: designed, specified and operated by Sergey Kasatov. The code
was written largely with AI assistance, not typed from scratch.

- No public repository: the system operates a private vault. Demonstrable live by
  screen share.
- Case study: https://kasatov.de/case-agent-system.html

### 3. FreshMart Demand Planner (deployed demo, wakes on request)

Retail sales forecasting end to end: EDA, feature engineering, comparison of 10+
models across statistical, machine-learning and deep-learning families, HyperOpt
tuning and MLflow experiment tracking. Champion: HyperOpt-tuned Random Forest,
RMSE 138.0, MAE 93.1, MAPE 21.3 percent, R2 0.43 on a chronological Jan-Mar 2014
test window. Deployed as a Streamlit planning tool that speaks planning language
rather than metrics.

- Demo app (sleeps after inactivity, wakes in about 30 s): https://freshmart-demand-planner.streamlit.app
- Code: https://github.com/sergey-kasatov/time-series-forecasting-project
- Case study: https://kasatov.de/case-freshmart.html

### 4. Predictive Maintenance: fleet risk and cost

Three business questions on a 92,000-row logistics fleet dataset: which vehicles need
maintenance (classification, PR-AUC 0.902 with XGBoost, F1 0.784 with logistic
regression), what it will cost (regression, R2 0.885 and RMSE 530 USD with Random
Forest), and how to segment the fleet by risk (KMeans k=2, silhouette 0.083,
interpreted post hoc as overloaded versus normally loaded vehicles). SHAP identified
Brake_Condition as the dominant risk predictor, confirming domain expectation.

- Code: https://github.com/sergey-kasatov/predictive-maintenance-ml
- Case study: https://kasatov.de/case-maintenance.html

### 5. AI Order Triage Agent

A 26-node n8n workflow that triages free-text wholesale orders in English and
Portuguese. A schema-bound extraction step turns prose into structured items,
deterministic Airtable lookups gather every fact, and one bounded LLM agent makes
the single judgment a rule cannot express, choosing between standard, needs_review
and needs_clarification. Logic routes and logs every order, and a human stays the
sender: the workflow never contacts a customer. Across three runs of each of the ten
sample orders, all 30 recorded classifications matched the course answer key and no
input ever produced two different classifications. 2 of 8 processing steps are AI.
Built on a fictional wholesale case, Volta Coffee Roasters in Porto.

- Code: https://github.com/sergey-kasatov/llm-order-triage-agent

### 6. Retail KPI Dashboard (live)

Interactive Tableau dashboard for revenue, profit, discount and orders with drill-down
by region, product category and period across roughly 10,000 rows, 48 months and
49 states. LOD expressions and dashboard actions give non-technical users
self-service analysis, the same logic as a quality trend board on a plant floor.

- Live: https://public.tableau.com/views/RetailKPIDashboardSalesProfitDiscount/MainDashboard

### 7. Neuron Platformer RL

A 2D platformer built from scratch as a custom Gymnasium environment, with a level
generator whose every gap is capped by the exact jump-physics envelope: an audit
re-proves solvability across 1,200 seeds, finding 0 impossible transitions in 11,619.
A PPO agent reading raw 84x84 pixels, with no coordinates, velocities or object lists,
beats the hand-crafted 19-feature state-vector baseline 80 percent to 27 percent on
200 held-out seeds; a difficulty curriculum then carries it to 52 percent on medium
and 55 percent on hard. Grad-CAM over the policy CNN shows attention on platform
edges, gaps and enemies. Four classic RL failure modes are documented rather than
hidden. A fourth phase replaces the frame stack with an LSTM reading one frame at a
time: recurrence does learn the game but lands behind the frame stack on every tier,
29.5 percent on medium against the curriculum agent's 52. Getting the numbers honest
took three extra experiments: a budget doubling that refuted the write-up's own
excuse (typical performance rose, the peak did not), a noise analysis showing a
30-episode evaluation carries about plus or minus 14 points, and a 200-seed
re-measurement of all four models that replaced every headline figure - the state
baseline's published 50 percent was really 27. The write-up was rewritten rather
than left flattering.

- Code: https://github.com/sergey-kasatov/neuron-platformer-rl

### 8. FX Random Walk Benchmark

A walk-forward benchmark that asks the question the banking brief did not: compared
to what? Twenty years of daily SGD/USD and CNY/USD, the naive "tomorrow equals today"
baseline established first, then ARIMA, SARIMA and gradient boosting scored against
it over 42,924 forecasts from 1,022 origins at three horizons. No model beat the
baseline at any significance level under Diebold-Mariano with the Harvey correction,
AIC selected ARIMA(0,1,0) for SGD, which is the random walk itself, and a purpose-built
move_ratio measure explains every model's error at r = 0.97. The no-leakage property
is proved mechanically rather than asserted: rewriting every observation after the cut
date must leave the earlier features byte-identical. Results are priced against a
USD 10m exposure. The only negative-result study in the portfolio.

- Code: https://github.com/sergey-kasatov/fx-random-walk-benchmark

### 9. CIFAR-10 transfer-learning study

Controlled ablation with ResNet50 isolating the effect of data volume, augmentation,
learning-rate scheduling and partial unfreezing, individually and combined. Accuracy
improved from 66 percent to 82.7 percent across 60,000 images. Grad-CAM shows what
the model actually attends to; the same mechanism drives automated visual inspection
in manufacturing.

- Code: https://github.com/sergey-kasatov/cifar10-resnet50-transfer-learning-experiments

### 10. NLP: disaster tweet classification

Shipped an interpretable TF-IDF plus logistic-regression classifier at accuracy
0.819, benchmarked against a CNN trained from scratch and a fine-tuned DistilBERT
(0.839). The explainable model won the trade-off: every flag can be justified word by
word, which matters more than the last two points of accuracy.

- Code: https://github.com/sergey-kasatov/nlp-disaster-tweets-classification

### 11. Car Price Estimator

Used-car pricing on 56,244 listings that returns a calibrated price range rather
than a single number. Two of the three required model families (linear regression,
decision tree) lost to a dealer-style lookup table; XGBoost beat it at MAE 1,016 USD
and 11.9 percent median error against the lookup's 13.3, with the real gain on cars
the lookup had never seen: 46 percent better there, 12 percent on familiar ones.
Mileage is 2.2 percent of permutation importance against 62.5 for age, so mileage
barely predicts price once age is known. Prediction intervals use split conformal
calibrated per price band, after the global version hit its 80 percent coverage
target on average while covering only 51.5 percent of cheap cars. Ships a CLI and
an importable module that reproduces the notebooks exactly.

- Code: https://github.com/sergey-kasatov/car-price-estimator

### 12. IATF Quality Report Prompt

A prompt that drafts German ISO 9001 / IATF 16949 quality reports and is forbidden
to derive any figure it was not given: a QMS report is a controlled record, and a
derived figure is an audit finding even when the arithmetic is right. A
negative-control test withheld one figure while leaving both operands in place as
bait. Across 7 runs the prompt never computed the withheld figure and never
introduced any figure absent from the input; the gap marker appeared in both
required places in only 5 of 7 runs, and that weaker number is published as found,
with the prompt deliberately left unfixed. A stdlib-only Python checker judges each
run mechanically, and the prompt accepted a customer 8D form with no edit.

- Code: https://github.com/sergey-kasatov/iatf-quality-report-prompt

### 13. TravelTide: customer segmentation

Retention targeting for a travel platform. A SQL pipeline in Databricks aggregated
49,211 sessions into 30+ behavioural features for 5,998 users; a rule-based perk-fit
score assigned each user the most relevant reward, producing five balanced segments.
KMeans and DBSCAN served as benchmarks; the interpretable approach won on stability
and deployment readiness.

- Code: https://github.com/sergey-kasatov/traveltide-segmentation-retention
- Presentation: https://youtu.be/jfZfYKk5VJ4

## Experience

### SEGULA Technologies - Automotive Consultant

Apr 2014 - Feb 2025, Cologne, Germany. Long-term assignments at Stellantis, Opel and
Ford.

**Project Engineer, BIW and Door Components (Stellantis, Ruesselsheim)**,
Jul 2022 - Feb 2025. Led development-to-launch integration for about 100 body-in-white
parts and coordinated about 150 engineering changes through ramp-up. A weekly KPI and
quality trend pack tracking 10 to 15 top issues per week cut issue time-to-close from
about 4 weeks to about 3 weeks and launch-phase rework by about 25 percent, delivering
a 100k EUR cost saving.

**Launch Quality Specialist, TSQ (Opel Plant Eisenach)**, Oct 2020 - Jun 2022.
Launch quality for Opel Grandland X Facelift serial production: tracked vehicles
through assembly sequences, analysed and resolved line-side issues, documented
corrective and preventive measures.

**Manufacturing Engineer, Launch and Logistics (Opel Eisenach and Ruesselsheim,
Stellantis Trnava)**, Jul 2019 - Sep 2020. Material flow analysis for the Opel
Grandland X PHEV introduction, Supermarket and E-Kanban optimisation, assembly
concepts for the Opel Astra line integration, support for PSA process introduction on
the Peugeot 208 and e208 BEV.

**Group Leader, Body Exterior and Interior (Ford)**, Apr 2014 - Jun 2019. Supported
7 vehicle launches with a structured open-issues cadence across 3 plants and
5 suppliers. Led a team of 3 engineers. Created a weekly KPI pack for 6 stakeholders
tracking SOP readiness on 70+ parts. Delivered 250k EUR in cost savings through
standardisation and localisation initiatives.

### General Motors - Product Engineer

Jan 2013 - Apr 2014, Saint Petersburg, Russia. Localised 25 BIW stamped parts through
local steel and metal-forming suppliers, delivering 75k EUR in savings. Built a
localisation tracker and weekly status reporting across Chevrolet, Opel and Cadillac
programs. Owned SOP readiness for 2 vehicle programs.

### Earlier

- Ford Motor Company, internship, Oct 2011 - Sep 2012, Cologne. Prototype-build
  readiness across supplier scope for the Ford Kuga (45 components); UHSS body
  structure repair methods.
- Continental AG, internship, Mar 2011 - Sep 2011, Ingolstadt. Thermo-mechanical
  simulations for injection-moulded pressure distributors, cutting cooling time
  by 35 percent.
- OJSC SOLLERS, Senior Supplier Quality Engineer, Jul 2008 - Sep 2010, Yelabuga.
  Audited 20+ suppliers, led PPAP and APQP for 35 parts, supported launches for
  3 vehicle models on FIAT and ISUZU programs.
- AO PO ElaS, Process Engineer, Feb 2008 - Jul 2008, Yelabuga. Developed and validated
  8 CNC programs; reduced manufacturing costs by about 15 percent.
- OJSC KMPO, intern, Aug 2007 - Dec 2007, Kazan.

## Education

**Master School Institute of Technology** - Data Analytics Program (AZAV), Advanced
Data Science and AI. Sep 2025 - Sep 2026, full time. Python, SQL and pandas on large
datasets; Tableau and Matplotlib for BI reporting; statistical analysis and predictive
modelling; time series, computer vision and NLP with LLMs; AI-assisted analysis
workflows, AI strategy and governance, and automation with agent concepts.

**Technische Hochschule Ingolstadt** - International Automotive Engineering,
Oct 2010 - Mar 2013. Master's program, 87.5 of 90 ECTS completed, degree not awarded.
Master's thesis at Ford-Werke GmbH on BIW repair methods for ultra-high-strength steel
structures, graded 1.3. Focus areas: mathematical modelling and simulation, automotive
design, car body construction.

## Certificates

Nine certificates with verification links are listed on https://kasatov.de/about.html.
The most recent is "AI Agents PRO" (Jul 2026), which covers agent workflows; the
multi-agent system described under project 12 is the practical result.

## Availability

Open to AI consulting and enablement, automation, and data analyst roles in Germany
from September 2026. Based in Cologne. On-site, hybrid or remote.

## About this site

Static HTML, no cookies, self-hosted fonts. The only external request is the
cookieless GoatCounter visitor counter (no personal data stored, no consent
banner required). Available in English and German
(https://kasatov.de/de/index.html). Written and maintained by Sergey Kasatov.
Every project card carries a figure taken from the project itself: a figure
committed in its repository, or a same-day screenshot of the online demo or of the
running system (the private agent system on Pos. 02 shows its live status board).
Per-image provenance:
https://kasatov.de/assets/img/_sources.md

Legal notice: https://kasatov.de/impressum.html · Privacy policy: https://kasatov.de/privacy.html
(German: https://kasatov.de/de/impressum.html · https://kasatov.de/de/datenschutz.html).
Automotive-facing profile for launch, quality and supplier-quality roles:
https://kasatov.de/automotive.html (German: https://kasatov.de/de/automotive.html).
