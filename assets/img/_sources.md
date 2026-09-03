# Image provenance - site-v6/assets/img

Built 2026-09-03 by `agent_scripts/_oneoff/build_project_images_2026_09_03.py` (Rule 29: every figure
records where and when it was read). Cards are 960x600 WebP (16:10, 2x for a 480 px card); case-sheet
figures keep their natural aspect at up to 1600 px. Nothing is drawn or mocked up: repository figures
are the committed PNGs, the two online demos are CDP screenshots taken the same day
(`capture_site_figures_2026_09_03.py`). The AI-Brain schematic (Pos. 12) is inline SVG in the pages,
an architecture drawing and not a screenshot, and is labelled as such in its caption.

| File | Kind | Source | Source size | Crop (source px) | Output | Weight | What it shows |
|---|---|---|---|---|---|---|---|
| `p-freshmart.webp` | card | CDP capture `streamlit_forecast_tall.png` (2026-09-03) | 2880x3400 | (760, 1195, 2717, 2170) | 960x600 | 30 KB, q85 | Streamlit app after Generate forecast (cutoff 2014-01-01, 14-day horizon), CDP capture at 1440 px, 2x; KPI tiles and the forecast chart |
| `p-maintenance.webp` | card | `https://github.com/sergey-kasatov/predictive-maintenance-ml` `images/35_shap_bar_importance.png` | 1060x820 | none | 960x600 | 22 KB, q85 | repository figure: global feature importance, mean |SHAP| over the top 20 features (XGBoost) |
| `p-nlp.webp` | card | `https://github.com/sergey-kasatov/nlp-disaster-tweets-classification` `images/06_top_coefficients.png` | 1372x630 | none | 960x600 | 28 KB, q85 | repository figure: largest logistic-regression coefficients per class |
| `p-cifar.webp` | card | `https://github.com/sergey-kasatov/cifar10-resnet50-transfer-learning-experiments` `assets/05_all_models_comparison.png` | 1069x588 | none | 960x600 | 15 KB, q85 | repository figure: test accuracy and training time of the four ablation runs |
| `p-traveltide.webp` | card | `https://github.com/sergey-kasatov/traveltide-segmentation-retention` `notebooks/traveltide_segmentation_retention_final.ipynb#10` | 989x490 | none | 960x600 | 14 KB, q85 | notebook output 10 (rule-based segment sizes), extracted from the committed notebook's PNG output |
| `p-dashboard.webp` | card | CDP capture `tableau_test.png` (2026-09-03) | 2880x2000 | (0, 42, 2016, 1062) | 960x600 | 46 KB, q85 | Tableau Public embed view of the Main Dashboard, CDP capture at 1440 px, 2x; KPI row, product table, map and filters (Tableau tab strip and lower charts cropped) |
| `p-iatf.webp` | card | `https://github.com/sergey-kasatov/iatf-quality-report-prompt` `images/checker_run.png` | 1115x622 | (0, 0, 720, 450) | 960x600 | 23 KB, q85 | repository screenshot: the marker checker's PowerShell run, 7 of 7 passed (empty right margin cropped) |
| `p-carprice.webp` | card | `https://github.com/sergey-kasatov/car-price-estimator` `reports/figures/07_feature_importance.png` | 1120x630 | none | 960x600 | 17 KB, q85 | repository figure: share of total permutation importance per feature, age 62.5 percent, mileage 2.2 percent (Sergey's pick 2026-09-03; the interval-coverage chart 09 was the first build) |
| `p-triage.webp` | card | `https://github.com/sergey-kasatov/llm-order-triage-agent` `media/n8n_decision_zone.png` | 780x370 | none | 960x600 | 22 KB, q85 | repository screenshot: decision zone of the n8n workflow (classifier agent, parse, route, three log-and-notify branches); source is 780 px wide, upscaled 1.23x |
| `p-fx.webp` | card | `https://github.com/sergey-kasatov/fx-random-walk-benchmark` `reports/figures/03_rmse_ratio.png` | 1784x724 | (0, 0, 1184, 724) | 960x600 | 24 KB, q85 | repository figure: RMSE ratio of every model to the random walk, horizons 1 and 5 (horizon 21 panel cropped) |
| `p-neuron.webp` | card | `https://github.com/sergey-kasatov/neuron-platformer-rl` `assets/saliency_maps.png` | 1281x2184 | (0, 0, 1281, 832) | 960x600 | 14 KB, q85 | repository figure: Grad-CAM saliency maps, first two of five rows (level frame, 84x84 CNN input, attention map) |
| `case-freshmart.webp` | fig | CDP capture `streamlit_validation.png` (2026-09-03) | 2880x2000 | (760, 130, 2720, 1296) | 1600x952 | 71 KB, q85 | Streamlit app, expander Model validation on the historical test period, CDP capture at 1440 px, 2x |
| `case-maintenance.webp` | fig | `https://github.com/sergey-kasatov/predictive-maintenance-ml` `images/23_pr_curves.png` | 820x700 | none | 820x700 | 19 KB, q85 | repository figure: precision-recall curves of the three classifiers on the test set |
| `case-agent-mc.webp` | figwide | CDP capture `mission_control_2x.png` (2026-09-03) | 2880x3000 | (0, 256, 2880, 1940) | 1920x1123 | 112 KB, q75 | Vault Mission Control (localhost:8137, serve_heartbeat.py), CDP capture at 1440 px, 2x, 14:18 CEST; KPI row, filter chips and the worker grid with WARN states as found; the infrastructure tiles above the KPI row cropped out |
