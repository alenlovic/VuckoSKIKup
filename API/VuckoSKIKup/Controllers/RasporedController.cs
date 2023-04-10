using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VuckoSKIKup.Database;
using VuckoSKIKup.Models;

namespace VuckoSKIKup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RasporedController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RasporedController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Raspored
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RasporedModel>>> GetRaspored()
        {
          if (_context.Raspored == null)
          {
              return NotFound();
          }
            return await _context.Raspored.ToListAsync();
        }

        // GET: api/Raspored/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RasporedModel>> GetRasporedModel(int id)
        {
          if (_context.Raspored == null)
          {
              return NotFound();
          }
            var rasporedModel = await _context.Raspored.FindAsync(id);

            if (rasporedModel == null)
            {
                return NotFound();
            }

            return rasporedModel;
        }

        // PUT: api/Raspored/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRasporedModel(int id, RasporedModel rasporedModel)
        {
            if (id != rasporedModel.ID)
            {
                return BadRequest();
            }

            _context.Entry(rasporedModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RasporedModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Raspored
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RasporedModel>> PostRasporedModel(RasporedModel rasporedModel)
        {
          if (_context.Raspored == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Raspored'  is null.");
          }
            _context.Raspored.Add(rasporedModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRasporedModel", new { id = rasporedModel.ID }, rasporedModel);
        }

        // DELETE: api/Raspored/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRasporedModel(int id)
        {
            if (_context.Raspored == null)
            {
                return NotFound();
            }
            var rasporedModel = await _context.Raspored.FindAsync(id);
            if (rasporedModel == null)
            {
                return NotFound();
            }

            _context.Raspored.Remove(rasporedModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RasporedModelExists(int id)
        {
            return (_context.Raspored?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
