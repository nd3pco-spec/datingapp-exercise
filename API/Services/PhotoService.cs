using System;
using API.Helpers;
using API.Interfaces;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;

namespace API.Services;

public class PhotoService : IPhotoService
{
    private readonly Cloudinary _cloudinary;
    // public PhotoService(IOptions<CloudinarySettings> config)
    // {
    //  var account   
    // }

    public Task<DeletionResult> DeletePhotoAsync(string publicId)
    {
        throw new NotImplementedException();
    }

    public Task<ImageUploadResult> UploadPhotoAsync(IFormFile file)
    {
        throw new NotImplementedException();
    }
}
