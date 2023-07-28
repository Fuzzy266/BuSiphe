using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse()
        {
        }

        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMesage(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMesage(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request was made",
                401 => "Unauthorized access",
                404 => "Resource was not found",
                500 => "Internal server error occurred.",
                _ => null
            };
        }
    }
}