# Preference Survey 

## Requirements

- 총 두 번의 차원축소 scatterplot score tagging을 진행해야 합니다
  - 한번은 monochrome scatterplot, 한번은 colored scatterplot (with class label)
- 각 tagging은 150장의 이미지로 이루어져 있습니다
- 두 번의 tagging을 모두 끝낸 후 카톡으로 (전현에게) 결과를 보내면 됩니다. 
  - `label.json` (colored scatterplot 태깅 결과) 과 `nolabel.json` (monochrome scatterplot 태깅 결과) 을 모두 보내주세요 


## Link

- [https://hyeonword.com/mdp_comp_preference_survey/](https://hyeonword.com/mdp_comp_preference_survey/)


## Interface

![image](https://user-images.githubusercontent.com/38465539/155889011-f4d712e7-d21a-4dcf-b597-24426e092524.png)

- 가장 먼저, label / no label을 선택할 수 있는 selection이 제목 옆에 위치해 있습니다. 각각 colored scatterplot / monochrome scatterplot에 해당하는 tagging을 진행할 수 있도록 합니다. 
  - 두 경우 모두 진행하고, 그 결과를 보내주셔야 합니다. 
- 왼쪽의 큰 scatterplot은 현재 점수를 매겨야 할 차원축소 임베딩을 나타내고 있으며, 1~5 radio button을 사용해 점수를 매길 수 있습니다. 
- 오른쪽에는 tagging을 진행해야 하는 모든 scatterplot의 이미지를 matrix cell 형태로 보여줘, 현재 보고 있는 scatterplot의 분포를 다른 scatterplot들과 비교할 수 있습니다. 현재 보고 있는 scatterplot에 해당하는 cell의 boundary는 굵게 표시됩니다. 
- 하나의 scatterplot에 대해 점수를 매기면, 해당하는 cell 밑에 분홍색으로 점수가 표시됩니다. 

![image](https://user-images.githubusercontent.com/38465539/155889012-179d70db-906a-4da2-a6ec-d464b7b33352.png)


- 새로운 scatterplot의 점수를 매기기 위해서는 Next 또는 Prev 버튼을 사용해 이동하거나, matrix 에서 점수를 매기고 싶은 scatterplot에 해당하는 cell을 클릭해서 이동하면 됩니다. 
- 모든 scatterplot의 score tagging이 끝나면 save the result 버튼이 활성화됩니다. 더이상 점수를 수정하고 싶지 않다면 버튼을 눌러 결과를 다운받으면 됩니다. 


## 주의사항

- 중간 저장 기능이 없습니다. 
- tagging을 진행하는 중에 제목 옆의 *label / no label selection* 을 바꾸지 마세요. scatterplot의 순서가 랜덤화되어 tagging 결과가 효력을 잃게 됩니다. 
  - 만일 실수로라도 바꾸었다면 새로고침 후 다시 진행해 주세요.
- 하나의 태깅을 다 진행하고 다운받았다며, 새로고침 후 두번째 태깅을 진행해 주세요. 



