using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Access-Controll-Allow-Origin", "*");
            response.Headers.Add("Access-Controll-Expose-Headers", "Application-Error");
            response.Headers.Add("Application-Error", message);
        }
    }
}
