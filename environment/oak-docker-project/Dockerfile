
# Use the official Deno Docker image as the base image
FROM denoland/deno:1.14.0

# Set the working directory inside the container
WORKDIR /app

# Copy the application files to the container
COPY . .

# Allow network access for the Deno application
ENV DENO_FLAGS="--allow-net=0.0.0.0:3000"

# Specify the command to run the Deno application with Oak
CMD ["deno", "run", "--unstable", "--allow-net", "app.ts"]