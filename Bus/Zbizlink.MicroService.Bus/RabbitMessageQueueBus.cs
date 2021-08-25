using System;
using System.Threading.Tasks;
using MassTransit;
using MassTransit.RabbitMqTransport;

namespace Zbizlink.Micro.RabbitMessageQueueBus
{
    public class RabbitMessageQueueBus
    {
        
        public static IBusControl ConfigureBus(IServiceProvider _provider, BusConstants _model, Action<IRabbitMqBusFactoryConfigurator>
         registrationAction = null)
        {
            return  Bus.Factory.CreateUsingRabbitMq(cfg =>
            {
               cfg.Host(new Uri(_model.RabbitMqUri), hst =>
                    {
                        hst.Username(_model.UserName);
                        hst.Password(_model.Password);
                    });
                cfg.ConfigureEndpoints((IBusRegistrationContext)_provider);
                registrationAction?.Invoke(cfg);
            });
        }
    }
}
