# Sergey Kasatov - Data Analyst

Cologne, Germany. Available from September 2026.

This is the machine-readable mirror of https://kasatov.de/. Same information as the
website, in a format agents can parse directly. The designed version lives at the
HTML pages linked below.

## TL;DR

- Data Analyst with 17 years of prior automotive engineering on Ford, GM, Opel and
  Stellantis programs: product development, supplier quality, and launch management.
- Retrained into data analytics (Masterschool, Data Analytics Program AZAV,
  Advanced Data Science and AI). Python, SQL, Tableau, machine learning, with a
  preference for interpretable models.
- Six completed portfolio projects, two of them deployed live. Open to Data Analyst,
  BI Analyst and Operations Analyst roles in Germany from September 2026.

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

The strongest fit is analytics in manufacturing, quality or operations, where the
domain knowledge is not decoration: knowing why a brake-condition signal dominates a
failure model, or what a launch-phase issue backlog actually costs, is the difference
between a model that scores well and a model someone trusts.

## Skills

Technical: SQL, Python, pandas, Tableau, Excel and Power Query, machine learning,
NLP, deep learning, data cleaning, exploratory data analysis, KPI design, dashboards,
DBeaver, Jupyter.

Domain: automotive quality engineering, 8D problem solving, SPC, PPAP, APQP,
launch management, body in white and closures, supplier quality.

Languages: Russian (native), English (C1), German (B2).

## Portfolio projects

Six completed projects. Every metric below is reproducible from the linked repository.

### 1. FreshMart Demand Planner (live)

Retail sales forecasting end to end: EDA, feature engineering, comparison of 10+
models across statistical, machine-learning and deep-learning families, HyperOpt
tuning and MLflow experiment tracking. Champion: HyperOpt-tuned Random Forest,
RMSE 138.0, MAE 93.1, MAPE 21.3 percent, R2 0.43 on a chronological Jan-Mar 2014
test window. Deployed as a Streamlit planning tool that speaks planning language
rather than metrics.

- Live app: https://freshmart-demand-planner.streamlit.app
- Code: https://github.com/sergey-kasatov/time-series-forecasting-project
- Case study: https://kasatov.de/case-freshmart.html

### 2. Predictive Maintenance: fleet risk and cost

Three business questions on a 92,000-row logistics fleet dataset: which vehicles need
maintenance (classification, PR-AUC 0.902 with XGBoost, F1 0.784 with logistic
regression), what it will cost (regression, R2 0.885 and RMSE 530 USD with Random
Forest), and how to segment the fleet by risk (KMeans k=2, silhouette 0.083,
interpreted post hoc as overloaded versus normally loaded vehicles). SHAP identified
Brake_Condition as the dominant risk predictor, confirming domain expectation.

- Code: https://github.com/sergey-kasatov/predictive-maintenance-ml
- Case study: https://kasatov.de/case-maintenance.html

### 3. NLP: disaster tweet classification

Shipped an interpretable TF-IDF plus logistic-regression classifier at accuracy
0.819, benchmarked against a CNN trained from scratch and a fine-tuned DistilBERT
(0.839). The explainable model won the trade-off: every flag can be justified word by
word, which matters more than the last two points of accuracy.

- Code: https://github.com/sergey-kasatov/nlp-disaster-tweets-classification

### 4. CIFAR-10 transfer-learning study

Controlled ablation with ResNet50 isolating the effect of data volume, augmentation,
learning-rate scheduling and partial unfreezing, individually and combined. Accuracy
improved from 66 percent to 82.7 percent across 60,000 images. Grad-CAM shows what
the model actually attends to; the same mechanism drives automated visual inspection
in manufacturing.

- Code: https://github.com/sergey-kasatov/cifar10-resnet50-transfer-learning-experiments

### 5. TravelTide: customer segmentation

Retention targeting for a travel platform. A SQL pipeline in Databricks aggregated
49,211 sessions into 30+ behavioural features for 5,998 users; a rule-based perk-fit
score assigned each user the most relevant reward, producing five balanced segments.
KMeans and DBSCAN served as benchmarks; the interpretable approach won on stability
and deployment readiness.

- Code: https://github.com/sergey-kasatov/traveltide-segmentation-retention
- Presentation: https://youtu.be/jfZfYKk5VJ4

### 6. Retail KPI Dashboard (live)

Interactive Tableau dashboard for revenue, profit, discount and orders with drill-down
by region, product category and period across roughly 10,000 rows, 48 months and
49 states. LOD expressions and dashboard actions give non-technical users
self-service analysis, the same logic as a quality trend board on a plant floor.

- Live: https://public.tableau.com/views/RetailKPIDashboardSalesProfitDiscount/MainDashboard
- Repo: https://github.com/sergey-kasatov/phoenix-retail-kpi-dashboard

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
modelling.

**Technische Hochschule Ingolstadt** - International Automotive Engineering,
Oct 2010 - Mar 2013. Master's program, coursework completed, degree not awarded.

## Certificates

Nine certificates with verification links are listed on https://kasatov.de/about.html.
The most recent is "AI Agents PRO" (Jul 2026), which covers agent workflows; the
personal knowledge base that AI agents work in daily is the practical result.

## Availability

Open to Data Analyst, BI Analyst and Operations Analyst roles in Germany from
September 2026. Based in Cologne. On-site, hybrid or remote.

## About this site

Static HTML, no cookies, no tracking, no external requests, self-hosted fonts.
Available in English and German (https://kasatov.de/de/index.html). Written and
maintained by Sergey Kasatov.
