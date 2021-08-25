#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WebServiceAPI/Zbizlink.MicroEmailBroadCaster.WebServiceAPI.csproj", "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WebServiceAPI/"]
COPY ["Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WorkerService/Zbizlink.MicroEmailBroadCaster.WorkerService.csproj", "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WorkerService/"]
COPY ["Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.LoggerService/Zbizlink.MicroEmailBroadCaster.LoggerService.csproj", "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.LoggerService/"]
COPY ["Enum/Zbizlink.Micro.Enum/Zbizlink.Micro.Enum.csproj", "Enum/Zbizlink.Micro.Enum/"]
COPY ["Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.DataModel/Zbizlink.MicroEmailBroadCaster.DataModel.csproj", "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.DataModel/"]
COPY ["Bus/Zbizlink.MicroService.Bus/Zbizlink.Micro.RabbitMessageQueueBus.csproj", "Bus/Zbizlink.MicroService.Bus/"]
COPY ["Domain/Zbilink.Domain.Core/Zbilink.Micro.Domain.Core.csproj", "Domain/Zbilink.Domain.Core/"]
COPY ["Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.Resolver/Zbizlink.MicroEmailBroadCaster.Resolver.csproj", "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.Resolver/"]
RUN dotnet restore "Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WebServiceAPI/Zbizlink.MicroEmailBroadCaster.WebServiceAPI.csproj"
COPY . .
WORKDIR "/src/Email-BroadCaster/Zbizlink.MicroEmailBroadCaster.WebServiceAPI"
RUN dotnet build "Zbizlink.MicroEmailBroadCaster.WebServiceAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Zbizlink.MicroEmailBroadCaster.WebServiceAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Zbizlink.MicroEmailBroadCaster.WebServiceAPI.dll"]