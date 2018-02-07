# Flux
轮子基于react + react-router 4.2 + rudex

flux用于剥离mvc的c层，跟react的架构变成mv + flux架构

Flux 中的流程为：
View -> Action(Action Creator -> Action) -> Dispatcher -> Store -> Controller View -> View

资源操作的流程为
View Require Mutation -> Action -> Dispatcher -> Store -> Mutate Handler