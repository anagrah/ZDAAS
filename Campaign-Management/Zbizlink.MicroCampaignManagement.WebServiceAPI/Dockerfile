#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Campaign-Management/Zbizlink.MicroCampaignManagement.WebServiceAPI/Zbizlink.MicroCampaignManagement.WebServiceAPI.csproj", "Campaign-Management/Zbizlink.MicroCampaignManagement.WebServiceAPI/"]
COPY ["Campaign-Management/Zbizlink.MicroCampaignManagement.WorkerService/Zbizlink.MicroCampaignManagement.WorkerService.csproj", "Campaign-Management/Zbizlink.MicroCampaignManagement.WorkerService/"]
COPY ["Campaign-Management/Zbizlink.MicroCampaignManagement.DataModel/Zbizlink.MicroCampaignManagement.DataModel.csproj", "Campaign-Management/Zbizlink.MicroCampaignManagement.DataModel/"]
COPY ["Campaign-Management/Zbizlink.CampaignManagementStoreProcedureModel/Zbizlink.CampaignManagementStoreProcedureModel.csproj", "Campaign-Management/Zbizlink.CampaignManagementStoreProcedureModel/"]
COPY ["Campaign-Management/Zbizlink.CMCommon/Zbizlink.CMCommon.csproj", "Campaign-Management/Zbizlink.CMCommon/"]
COPY ["Bus/Zbizlink.MicroService.Bus/Zbizlink.Micro.RabbitMessageQueueBus.csproj", "Bus/Zbizlink.MicroService.Bus/"]
COPY ["Domain/Zbilink.Domain.Core/Zbilink.Micro.Domain.Core.csproj", "Domain/Zbilink.Domain.Core/"]
COPY ["Campaign-Management/Zbizlink.MicroCampaignManagement.LoggerService/Zbizlink.MicroCampaignManagement.LoggerService.csproj", "Campaign-Management/Zbizlink.MicroCampaignManagement.LoggerService/"]
COPY ["Campaign-Management/Zbizlink.MicroCampaignManagement.Resolver/Zbizlink.MicroCampaignManagement.Resolver.csproj", "Campaign-Management/Zbizlink.MicroCampaignManagement.Resolver/"]
RUN dotnet restore "Campaign-Management/Zbizlink.MicroCampaignManagement.WebServiceAPI/Zbizlink.MicroCampaignManagement.WebServiceAPI.csproj"
COPY . .
WORKDIR "/src/Campaign-Management/Zbizlink.MicroCampaignManagement.WebServiceAPI"
RUN dotnet build "Zbizlink.MicroCampaignManagement.WebServiceAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Zbizlink.MicroCampaignManagement.WebServiceAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Zbizlink.MicroCampaignManagement.WebServiceAPI.dll"]